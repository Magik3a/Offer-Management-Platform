using System;
using FluentMigrator;

namespace OMP.Migrations.OffersDB
{
    [Migration(20200927125500)]
    public class OffersDB_20200927_125500_CountForCompleted : AutoReversingMigration
    {
        public override void Up()
        {
            this.Alter.Table("OfferStatuses")
                .AddColumn("CountForCompleted").AsBoolean().NotNullable().WithDefaultValue(false);

            this.Alter.Table("TaskStatuses")
                .AddColumn("CountForCompleted").AsBoolean().NotNullable().WithDefaultValue(false);

            this.Alter.Table("Accounts")
                .AddColumn("CompanyId").AsInt32().Nullable()
                .ForeignKey("Companies", "CompanyId");


            this.Alter.Table("Companies")
                .AddColumn("AdditionalInfo").AsString(Int32.MaxValue).Nullable();

            this.CreateTableWithId32("CompanyWebSites", "CompanyWebSiteId", s => s
                .WithColumn("Name").AsString(500).Nullable()
                
                .WithColumn("CompanyId").AsInt32().NotNullable()
                .ForeignKey("Companies", "CompanyId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
        }
    }
}