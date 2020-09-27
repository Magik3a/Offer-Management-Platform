using System;
using FluentMigrator;

namespace OMP.Migrations.OffersDB
{
    [Migration(20200927205500)]
    public class OffersDB_20200927_205500_SoftwareFrameworks : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId32("SoftwareFrameworks", "SoftwareFrameworkId", s => s
                .WithColumn("Name").AsString(500).NotNullable()
                .WithColumn("Description").AsString(Int32.MaxValue).Nullable()
                .WithColumn("SpecificVersion").AsString(500).Nullable()
                .WithColumn("BorderColor").AsString(50).Nullable()
                .WithColumn("BackgroundColor").AsString(50).Nullable()

                .WithColumn("InsertDate").AsDateTime().NotNullable()
                .WithColumn("InsertUserId").AsInt32().NotNullable()
                .WithColumn("UpdateDate").AsDateTime().Nullable()
                .WithColumn("UpdateUserId").AsInt32().Nullable()
                .WithColumn("IsActive").AsInt16().NotNullable().WithDefaultValue(1));


            this.Alter.Table("Offers")
                .AddColumn("SoftwareFrameworkId").AsInt32().Nullable()
                .ForeignKey("SoftwareFrameworks", "SoftwareFrameworkId");

            Insert.IntoTable("SoftwareFrameworks").Row(new
            {
                Name = "WordPress",
                SpecificVersion = "5.2.7",
                BorderColor = "#ffffff",
                BackgroundColor = "#01bec1",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });

            Insert.IntoTable("SoftwareFrameworks").Row(new
            {
                Name = ".Net Core",
                SpecificVersion = "3.0.0",
                BorderColor = "#ffffff",
                BackgroundColor = "#c03fe4",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("SoftwareFrameworks").Row(new
            {
                Name = ".Net Framework",
                SpecificVersion = "4.7.2",
                BorderColor = "#ffffff",
                BackgroundColor = "#4d73ff",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
            Insert.IntoTable("SoftwareFrameworks").Row(new
            {
                Name = "Xamarin",
                BorderColor = "#ffffff",
                BackgroundColor = "#FF8C00",
                InsertDate = DateTime.Now,
                InsertUserId = 1,
                IsActive = 1
            });
        }
    }
}