using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OMP.Administration.Entities;
using Serenity.Services;
using Serenity.Data;
using Serenity.Data.Mapping;
using Serenity.Reflection;

namespace OMP.Administration
{
    public class OMPLoggingRowBehavior : IImplicitBehavior, IListBehavior
    {
        public bool ActivateFor(Row row)
        {
            var logging = row as OMPLoggingRow;
            if (logging == null)
                return false;

            return true;
        }

        public void OnValidateRequest(IListRequestHandler handler) { }

        public void OnPrepareQuery(IListRequestHandler handler, SqlQuery query) { }

        public void OnApplyFilters(IListRequestHandler handler, SqlQuery query) { }

        public void OnBeforeExecuteQuery(IListRequestHandler handler) { }

        public void OnAfterExecuteQuery(IListRequestHandler handler) { }

        public void OnReturn(IListRequestHandler handler)
        {
            if (handler.Response.Entities.Count == 0)
                return;
            var entities = handler.Response.Entities.Cast<OMPLoggingRow>().ToList();

            var insertUserIds = entities
                .Where(l => l.InsertUserId != null)
                .Select(l => l.InsertUserId);
            var updateUserIds = entities
                .Where(l => l.UpdateUserId != null)
                .Select(l => l.UpdateUserId);

            var allIdsList = new List<int?>();

            allIdsList.AddRange(insertUserIds);
            allIdsList.AddRange(updateUserIds);

            allIdsList = allIdsList.Distinct().ToList();

            using (var connection = SqlConnections.NewFor<UserRow>())
            {
                var users = connection.List<UserRow>(UserRow.Fields.UserId.In(allIdsList));

                foreach (var entity in handler.Response.Entities.Cast<OMPLoggingRow>())
                {
                    if (entity.InsertUserId.HasValue)
                    {
                        entity.InsertUserName = users.FirstOrDefault(u => u.UserId == entity.InsertUserId.Value)?.DisplayName;
                    }

                    if (entity.UpdateUserId.HasValue)
                    {
                        entity.UpdateUserName = users.FirstOrDefault(u => u.UserId == entity.UpdateUserId.Value)?.DisplayName;

                    }
                }
            }
        }
    }
}
