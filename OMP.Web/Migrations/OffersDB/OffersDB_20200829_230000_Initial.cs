using System;
using FluentMigrator;

namespace OMP.Migrations.OffersDB
{
    [Migration(20200829230000)]
    public class OffersDB_20200829_230000_Initial : AutoReversingMigration
    {
        public override void Up()
        {

            this.CreateTableWithId32("Countries", "CountryId", s => s
                .WithColumn("Name").AsString(500).NotNullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("CountriesLang", "ID", s => s
                .WithColumn("CountryId").AsInt32().NotNullable()
                .ForeignKey("Countries", "CountryId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            this.CreateTableWithId32("Cities", "CityId", s => s
                .WithColumn("Name").AsString(500).NotNullable()

                .WithColumn("CountryId").AsInt32().NotNullable()
                .ForeignKey("Countries", "CountryId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("CitiesLang", "ID", s => s
                .WithColumn("CityId").AsInt32().NotNullable()
                .ForeignKey("Cities", "CityId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            this.CreateTableWithId32("Accounts", "AccountId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("Phone").AsString(200).Nullable()
                
                .WithColumn("CityId").AsInt32().Nullable()
                .ForeignKey("Cities", "CityId")
                
                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("AccountsLang", "ID", s => s
                .WithColumn("AccountId").AsInt32().NotNullable()
                .ForeignKey("Accounts", "AccountId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Address").AsString(500).Nullable()
            );

            this.CreateTableWithId32("Companies", "CompanyId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("Phone").AsString(200).Nullable()
                
                .WithColumn("CityId").AsInt32().Nullable()
                .ForeignKey("Cities", "CityId")

                .WithColumn("PrimaryAccountId").AsInt32().Nullable()
                .ForeignKey("Accounts", "AccountId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);


            this.CreateTableWithId32("CompaniesLang", "ID", s => s
                .WithColumn("CompanyId").AsInt32().NotNullable()
                .ForeignKey("Companies", "CompanyId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("Address").AsString(500).Nullable()
            );

            this.CreateTableWithId32("Categories", "CategoryId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("FontColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("CategoriesLang", "ID", s => s
                .WithColumn("CategoryId").AsInt32().NotNullable()
                .ForeignKey("Categories", "CategoryId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
            );

            this.CreateTableWithId32("OfferStatuses", "OfferStatusId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));
            
            this.CreateTableWithId32("OfferStatusesLang", "ID", s => s
                .WithColumn("OfferStatusId").AsInt32().NotNullable()
                .ForeignKey("OfferStatuses", "OfferStatusId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            Insert.IntoTable("OfferStatuses").Row(new
            {
                Name = "Open",
                BorderColor = "#000000",
                BackgroundColor = "#3498DB",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OfferStatuses").Row(new
            {
                Name = "Confirmed",
                BorderColor = "#000000",
                BackgroundColor = "#2ECC71",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OfferStatuses").Row(new
            {
                Name = "Completed",
                BorderColor = "#000000",
                BackgroundColor = "#b3bab6",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("OfferStatuses").Row(new
            {
                Name = "Cancelled",
                BorderColor = "#000000",
                BackgroundColor = "#2C3E50",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("Offers", "OfferId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Discount").AsCurrency().NotNullable().WithDefaultValue(0)
                .WithColumn("MinimumDaysDevelopmentTime").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("MaximumDaysDevelopmentTime").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("StartDate").AsDateTime().Nullable()
                .WithColumn("AdditionalInfo").AsString(Int32.MaxValue).Nullable()
                
                .WithColumn("CompanyId").AsInt32().Nullable()
                .ForeignKey("Companies", "CompanyId")
                
                .WithColumn("OfferStatusId").AsInt32().NotNullable()
                .ForeignKey("OfferStatuses", "OfferStatusId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("OffersLang", "ID", s => s
                .WithColumn("OfferId").AsInt32().NotNullable()
                .ForeignKey("Offers", "OfferId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable()
                .WithColumn("AdditionalInfo").AsString(Int32.MaxValue).Nullable()
            );

            this.CreateTableWithId32("OfferCategories", "OfferCategoryId", s => s
                .WithColumn("OfferId").AsInt32().NotNullable()
                .ForeignKey("Offers", "OfferId")

                .WithColumn("CategoryId").AsInt32().NotNullable()
                .ForeignKey("Categories", "CategoryId")

                .WithColumn("Price").AsCurrency().NotNullable().WithDefaultValue(0)
                .WithColumn("CategoryNameReport").AsString(500).NotNullable()
                .WithColumn("CategoryFontColorReport").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);

            this.CreateTableWithId32("OfferCategoriesLang", "ID", s => s
                .WithColumn("OfferCategoryId").AsInt32().NotNullable()
                .ForeignKey("OfferCategories", "OfferCategoryId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("CategoryNameReport").AsString(500).Nullable()
            );

            this.CreateTableWithId32("TaskStatuses", "TaskStatusId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));

            this.CreateTableWithId32("TaskStatusesLang", "ID", s => s
                .WithColumn("TaskStatusId").AsInt32().NotNullable()
                .ForeignKey("TaskStatuses", "TaskStatusId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(500).Nullable());

            Insert.IntoTable("TaskStatuses").Row(new
            {
                Name = "Not Started",
                BorderColor = "#000000",
                BackgroundColor = "#3498DB",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("TaskStatuses").Row(new
            {
                Name = "Doing",
                BorderColor = "#000000",
                BackgroundColor = "#34d3db",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("TaskStatuses").Row(new
            {
                Name = "Testing",
                BorderColor = "#000000",
                BackgroundColor = "#34db9e",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("TaskStatuses").Row(new
            {
                Name = "Completed",
                BorderColor = "#000000",
                BackgroundColor = "#2ECC71",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            this.CreateTableWithId32("OfferCategoryTasks", "OfferCategoryTaskId", s => s
                .WithColumn("Name").AsString(2000).NotNullable()
                .WithColumn("DevelopmentTimeHours").AsDecimal(6, 2).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()

                .WithColumn("ParentOfferCategoryTaskId").AsInt32().Nullable()
                .ForeignKey("OfferCategoryTasks", "OfferCategoryTaskId")

                .WithColumn("OfferCategoryId").AsInt32().NotNullable()
                .ForeignKey("OfferCategories", "OfferCategoryId")

                .WithColumn("TaskStatusId").AsInt32().Nullable()
                .ForeignKey("TaskStatuses", "TaskStatusId")

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1), checkExists: true);


            this.CreateTableWithId32("OfferCategoryTasksLang", "ID", s => s
                .WithColumn("OfferCategoryTaskId").AsInt32().NotNullable()
                .ForeignKey("OfferCategoryTasks", "OfferCategoryTaskId")
                .WithColumn("LanguageID").AsInt32().NotNullable()
                .WithColumn("Name").AsString(2000).Nullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
            );

            this.CreateTableWithId64("Notes", "NoteID", s => s
                .WithColumn("EntityType").AsString(100).NotNullable()
                .WithColumn("EntityID").AsInt64().NotNullable()
                .WithColumn("Text").AsString(int.MaxValue).NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("InsertDate").AsDateTime().NotNullable().WithDefaultValue(DateTime.Now)
            );
        }
    }
}