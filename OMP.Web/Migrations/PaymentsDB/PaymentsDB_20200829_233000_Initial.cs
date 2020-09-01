using System;
using FluentMigrator;

namespace OMP.Migrations.PaymentsDB
{
    [Migration(20200829233000)]
    public class PaymentsDB_20200829_233000_Initial : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("PaymentTypes", "PaymentTypeId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("PaymentTypesLang", "ID", s => s
                .WithColumn("PaymentTypeId").AsInt32().NotNullable()
                .ForeignKey("PaymentTypes", "PaymentTypeId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            Insert.IntoTable("PaymentTypes").Row(new
            {
                Name = "Cash",
                BorderColor = "#000000",
                BackgroundColor = "#2ECC71",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentTypes").Row(new
            {
                Name = "Bank payment",
                BorderColor = "#000000",
                BackgroundColor = "#7d54b6",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentTypes").Row(new
            {
                Name = "PayPal",
                BorderColor = "#000000",
                BackgroundColor = "#3498DB",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("PaymentStatuses", "PaymentStatusId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));


            this.CreateTableWithId32("PaymentStatusesLang", "ID", s => s
                .WithColumn("PaymentStatusId").AsInt32().NotNullable()
                .ForeignKey("PaymentStatuses", "PaymentStatusId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            Insert.IntoTable("PaymentStatuses").Row(new
            {
                Name = "Pending",
                BorderColor = "#000000",
                BackgroundColor = "#3498DB",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentStatuses").Row(new
            {
                Name = "Completed",
                BorderColor = "#000000",
                BackgroundColor = "#2ECC71",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentStatuses").Row(new
            {
                Name = "Refunded",
                BorderColor = "#000000",
                BackgroundColor = "#34219E",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentStatuses").Row(new
            {
                Name = "Failed",
                BorderColor = "#000000",
                BackgroundColor = "#E74C3C",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("PaymentStatuses").Row(new
            {
                Name = "Canceled",
                BorderColor = "#000000",
                BackgroundColor = "#2C3E50",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("Payments", "PaymentId", s => s
                // No Foreign Key, its other DB
                .WithColumn("OfferId").AsInt32().Nullable()
                // No Foreign Key, its other DB
                .WithColumn("AccountId").AsInt32().Nullable()

                .WithColumn("PaymentTypeId").AsInt32().Nullable()
                .ForeignKey("PaymentTypes", "PaymentTypeId")

                .WithColumn("PaymentStatusId").AsInt32().Nullable()
                .ForeignKey("PaymentStatuses", "PaymentStatusId")

                .WithColumn("Price").AsCurrency().NotNullable().WithDefaultValue(0)
                .WithColumn("PaymentDate").AsDateTime().Nullable()
                .WithColumn("IsPaid").AsBoolean().NotNullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()

                // Enum TransactionType
                .WithColumn("TransactionType").AsInt16().Nullable()
                .WithColumn("TransactionDate ").AsDateTime().Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);
        }
    }
}