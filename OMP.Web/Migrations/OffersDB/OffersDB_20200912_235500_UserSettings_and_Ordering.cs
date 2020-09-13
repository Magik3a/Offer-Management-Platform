using System;
using FluentMigrator;

namespace OMP.Migrations.OffersDB
{
    [Migration(20200912235500)]
    public class OffersDB_20200912_235500_UserSettings_and_Ordering : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("UserOfferSettings", "UserOfferSettingId", s => s
                .WithColumn("OfferInvoiceAdditionalInfoFormatter").AsString(Int32.MaxValue).Nullable()
                .WithColumn("OfferInvoiceFooterText").AsString(Int32.MaxValue).Nullable()
                .WithColumn("OfferInvoiceFooterImage").AsString(500).Nullable()

                .WithColumn("UserId").AsInt32().NotNullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("UserOfferSettingsLang", "ID", s => s
                .WithColumn("UserOfferSettingId").AsInt32().NotNullable()
                .ForeignKey("UserOfferSettings", "UserOfferSettingId")

                .WithColumn("LanguageID").AsInt32().NotNullable()

                .WithColumn("OfferInvoiceAdditionalInfoFormatter").AsString(Int32.MaxValue).Nullable()
                .WithColumn("OfferInvoiceFooterText").AsString(Int32.MaxValue).Nullable()
                .WithColumn("OfferInvoiceFooterImage").AsString(500).Nullable()
            );

            this.Alter.Table("OfferCategories")
                .AddColumn("Order").AsInt32().NotNullable().WithDefaultValue(0);

            this.Alter.Table("OfferCategoryTasks")
                .AddColumn("Order").AsInt32().NotNullable().WithDefaultValue(0);

            this.Alter.Table("Categories")
                .AddColumn("DefaultOrder").AsInt32().NotNullable().WithDefaultValue(0);


            this.CreateTableWithId32("OfferAttachments", "OfferAttachmentId", s => s
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("FilePath").AsString(Int32.MaxValue).NotNullable()

                .WithColumn("OfferId").AsInt32().NotNullable()
                .ForeignKey("Offers", "OfferId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            var id = Insert.IntoTable("UserOfferSettings").Row(new
            {
                OfferInvoiceAdditionalInfoFormatter = 
@"Development time {0} ~ {1} days. The offer does not include a hosting plan and a domain.
During construction, the system will be hosted on a personal server.After completing the functionality and the steps described,
it must be replaced by a client hosting with a specified name(domain).The offer is valid for 30 days from {2}",
                OfferInvoiceFooterText = 
@"Developer: Svetlin Krastanov
<br />
Mobile: +359888017004
<br />
Email: svetlin.krastanov90@gmail.com
<br />
Site: <a href='https://s2kdesign.com'>https://s2kdesign.com</a>",
                OfferInvoiceFooterImage = "../../Content/site/images/s2kdesign-tiny-logo.png",
                UserId = 1,

                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
        }
    }
}