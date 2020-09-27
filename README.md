# Offer Management Platform

Check the demo: https://omp-demo.s2kdesign.com/

Based on 
Serenity Application Platform
https://github.com/volkanceylan/Serenity

- Added Funckionality:
  - PDF Reports with custom Header and Footer
    - Generate PDF from the grid or the dialog https://omp-demo.s2kdesign.com/Offers/Offers 
  - OMPLocalizationBehavior - OMPLocalizationLookupScript 
    - Will translate all grids and Lookup scripts to the user selected language. It uses LocalizationRowAttribute 
    - Switch between Bulgarian and English language to see results https://omp-demo.s2kdesign.com/Offers/Categories
  - Counter for grids in other tabs
    - Common/TabsExtensions.ts
    - Counts the rows in grid and shows it in the Tab in Dialog
  - ColorPickerEditor
    - Common/ColorPickerEditor.ts
    - Can be used directly on columns with the new html color picker editor https://www.w3schools.com/colors/colors_picker.asp
  - EnvironmentSettings - RegistrationDisabled
    - Set to false in AppSettings.json to disable registration and the link in the login page
  - MultipleFileDownloadFormatter(ShowFileNames = false)
    - Like FileDownloadFormatter but for multiple files 
  - ColoredColumnFormatter(BackgroundColor = "#000000", BackgroundProperty = "", BorderColor ="#000000", BorderProperty = "", HideText = false)
    - Can be used on columns with color to hide the hex color code and to show background color for the column. 
  - FontColorColumnFormatter(FontColorProperty = "")
    - Use to set font color on column text