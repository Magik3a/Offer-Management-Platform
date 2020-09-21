
namespace OMP.Offers.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using Microsoft.AspNetCore.Mvc;
    using MyRepository = Repositories.UserOfferSettingsRepository;
    using MyRow = Entities.UserOfferSettingsRow;
    using System;
    using OMP.Offers.Entities;
    using System.Linq;
    using Microsoft.AspNetCore.Mvc.Formatters;
    using Microsoft.CodeAnalysis.CSharp.Syntax;

    [Route("Services/Offers/UserOfferSettings/[action]")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class UserOfferSettingsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            if (!request.Entity.UserId.HasValue)
            {
                request.Entity.UserId = Int32.Parse(Authorization.UserDefinition.Id);
            }
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyRepository().Undelete(uow, request);
        }
        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> RetrieveForUser(IDbConnection connection, RetrieveRequest request)
        {
            var userOfferSettings = connection.List<MyRow>(MyRow.Fields.UserId == Authorization.UserId
                                                           && MyRow.Fields.IsActive == 1)
                                                                                        .OrderByDescending(s => s.InsertDate).ToList();
            if (userOfferSettings.Any())
            {
                request.EntityId = userOfferSettings.FirstOrDefault().UserOfferSettingId.Value;
                return new MyRepository().Retrieve(connection, request);
            }

            return new RetrieveResponse<MyRow>();
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }
    }
}
