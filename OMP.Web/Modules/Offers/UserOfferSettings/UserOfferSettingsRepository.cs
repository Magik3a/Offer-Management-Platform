
using System.Linq;
using OMP.Administration.Entities;

namespace OMP.Offers.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.UserOfferSettingsRow;

    public class UserOfferSettingsRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow>
        {
            protected override void OnReturn()
            {
                base.OnReturn();

                if (Response.Entities.Count == 0)
                    return;

                var userIds = Response.Entities.Select(r => r.UserId);
                using (var connection = SqlConnections.NewFor<UserRow>())
                {
                    var users = connection.List<UserRow>(UserRow.Fields.UserId.In(userIds.Distinct()));

                    foreach (var entity in Response.Entities)
                    {
                        if (entity.UserId.HasValue)
                        {
                            entity.UserName = users.FirstOrDefault(u => u.UserId == entity.UserId.Value)?.DisplayName;
                        }

                    }
                }
            }
        }
    }
}