using Serenity.Navigation;
using MyPages = OMP.Offers.Pages;

[assembly: NavigationLink(1000, "Offers", typeof(MyPages.OffersController), icon: "fa-files-o")]
                      
[assembly: NavigationMenu(1000, "Organization", icon: "fa-sitemap")]
[assembly: NavigationLink(1000, "Organization/Accounts", typeof(MyPages.AccountsController), icon: "fa-credit-card")]
[assembly: NavigationLink(1000, "Organization/Companies", typeof(MyPages.CompaniesController), icon: "fa-industry")]
[assembly: NavigationLink(1000, "Organization/Company Web Sites", typeof(MyPages.CompanyWebSitesController), icon: "fa-external-link")]
[assembly: NavigationLink(1000, "Organization/Countries", typeof(MyPages.CountriesController), icon: "fa-map-o")]
[assembly: NavigationLink(1000, "Organization/Cities", typeof(MyPages.CitiesController), icon: "fa-puzzle-piece")]

[assembly: NavigationMenu(1000, "Offers Settings", icon: "fa-folder-o")]
[assembly: NavigationLink(1000, "Offers Settings/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Statuses", typeof(MyPages.OfferStatusesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Task Statuses", typeof(MyPages.TaskStatusesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Categories", typeof(MyPages.OfferCategoriesController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Category Tasks", typeof(MyPages.OfferCategoryTasksController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/User Offer Settings", typeof(MyPages.UserOfferSettingsController), icon: null)]
[assembly: NavigationLink(1000, "Offers Settings/Offer Attachments", typeof(MyPages.OfferAttachmentsController), icon: null)]