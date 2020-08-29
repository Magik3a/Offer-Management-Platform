#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["OMP.Web/OMP.Web.csproj", "OMP.Web/"]
RUN dotnet restore "OMP.Web/OMP.Web.csproj"
COPY . .
WORKDIR "/src/OMP.Web"
RUN dotnet build "OMP.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "OMP.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OMP.Web.dll"]