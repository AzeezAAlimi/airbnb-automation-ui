import { expect, type Locator, type Page } from '@playwright/test';

export class Filter {
  readonly page: Page;
  readonly filterBtn: Locator;
  readonly typeOfPlaceAnyTypeBtn: Locator;
  readonly typeOfPlaceRoomBtn: Locator;
  readonly typeOfPlaceEntireHomeBtn: Locator;
  readonly minPriceRangeInputBtn: Locator;
  readonly maxPriceRangeInputBtn: Locator;
  readonly increaseNoOfBedRoomsBtn: Locator;
  readonly increaseNoOfBedsBtn: Locator;
  readonly increaseNoOfBathRoomsBtn: Locator;
  readonly decreaseNoOfBedRoomsBtn: Locator;
  readonly decreaseNoOfBedsBtn: Locator;
  readonly decreaseNoOfBathRoomsBtn: Locator;

  readonly noOfBedRoomsValue: Locator;
  readonly noOfBedsValue: Locator;
  readonly noOfBathRoomsValue: Locator;

  readonly showMoreAmenitieaBtn: Locator;
  readonly amenitiesWifiBtn: Locator;
  readonly amenitiesKitchenBtn: Locator;
  readonly amenitiesWasherBtn: Locator;
  readonly amenitiesDryerBtn: Locator;
  readonly amenitiesACBtn: Locator;
  readonly amenitiesHeatingBtn: Locator;
  readonly amenitiesWorkSpaceBtn: Locator;
  readonly amenitiesTVBtn: Locator;
  readonly amenitiesHairDryerBtn: Locator;
  readonly amenitiesIronBtn: Locator;
  readonly amenitiesPoolBtn: Locator;
  readonly amenitiesHotTubBtn: Locator;
  readonly amenitiesParkingBtn: Locator;
  readonly amenitiesEVChargerBtn: Locator;
  readonly amenitiesCribBtn: Locator;
  readonly amenitiesKingBedBtn: Locator;
  readonly amenitiesGymBtn: Locator;
  readonly amenitiesBbqGrillBtn: Locator;
  readonly amenitiesBreakfastBtn: Locator;
  readonly amenitiesFirePlaceBtn: Locator;
  readonly amenitiesAllowSmokingBtn: Locator;
  readonly beachFrontBtn: Locator;
  readonly waterFrontBtn: Locator;
  readonly smokeAlarmBtn: Locator;
  readonly carbonMonoxideAlarmBtn: Locator;
  readonly instantBookBtn: Locator;
  readonly selfCheckInBtn: Locator;
  readonly allowsPetsBtn: Locator;
  readonly guestFavoriteBtn: Locator;
  readonly propertyTypeSection: Locator;
  readonly houseBtn: Locator;
  readonly apartmentBtn: Locator;
  readonly guestHouseBtn: Locator;
  readonly hotelBtn: Locator;
  readonly accessibilityFeaturesSection: Locator;
  readonly stepFreeAccessBtn: Locator;
  readonly disabledParkingSpotBtn: Locator;
  readonly bigGuestEntranceBtn: Locator;
  readonly stepFreeBedRoomAccessBtn: Locator;
  readonly bigBedRoomEntranceBtn: Locator;
  readonly stepFreeBathRoomAccessBtn: Locator;
  readonly bigBathRoomEntranceBtn: Locator;
  readonly toiletGrabBarBtn: Locator;
  readonly showerGrabBarBtn: Locator;
  readonly stepFreeShowerBtn: Locator;
  readonly showerOrBathChairBtn: Locator;
  readonly ceilingOrMobileHoistBtn: Locator;
  readonly hostLanguageSection: Locator;
  readonly chineseLangBtn: Locator;
  readonly englishLangBtn: Locator;
  readonly frenchLangBtn: Locator;
  readonly germanLangBtn: Locator;
  readonly italianLangBtn: Locator;
  readonly japaneseLangBtn: Locator;
  readonly koreanLangBtn: Locator;
  readonly portugueseLangBtn: Locator;
  readonly russianLangBtn: Locator;
  readonly spanishLangBtn: Locator;
  readonly arabicLangBtn: Locator;
  readonly catalanLangBtn: Locator;
  readonly croatianLangBtn: Locator;
  readonly czechLangBtn: Locator;
  readonly danishLangBtn: Locator;
  readonly dutchLangBtn: Locator;
  readonly finnishLangBtn: Locator;
  readonly greekLangBtn: Locator;
  readonly hebrewLangBtn: Locator;
  readonly hindiLangBtn: Locator;
  readonly hungarianLangBtn: Locator;
  readonly icelandicLangBtn: Locator;
  readonly indonesianLangBtn: Locator;
  readonly malayLangBtn: Locator;
  readonly norwegianLangBtn: Locator;
  readonly polishLangBtn: Locator;
  readonly swedishLangBtn: Locator;
  readonly thaiLangBtn: Locator;
  readonly turkishLangBtn: Locator;
  readonly afrikaansLangBtn: Locator;
  readonly belarusianLangBtn: Locator;
  readonly bengaliLangBtn: Locator;
  readonly bulgarianLangBtn: Locator;
  readonly estonianLangBtn: Locator;
  readonly filipinoLangBtn: Locator;
  readonly kannadaLangBtn: Locator;
  readonly khmerLangBtn: Locator;
  readonly latvianLangBtn: Locator;
  readonly lithuanianLangBtn: Locator;
  readonly punjabiLangBtn: Locator;
  readonly romanianLangBtn: Locator;
  readonly serbianLangBtn: Locator;
  readonly slovakianLangBtn: Locator;
  readonly slovenianLangBtn: Locator;
  readonly swahiliLangBtn: Locator;
  readonly tagalogLangBtn: Locator;
  readonly ukrainianLangBtn: Locator;
  readonly vietnameseLangBtn: Locator;
  readonly clearAllBtn: Locator;
  readonly showPlaceBtn: Locator;
  readonly closeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterBtn = page.getByTestId('category-bar-filter-button');
    this.typeOfPlaceAnyTypeBtn = page.getByRole('radio', { name: 'Any type' });
    this.typeOfPlaceRoomBtn = page.getByRole('radio', { name: 'Room' });
    this.typeOfPlaceEntireHomeBtn = page.getByRole('radio', { name: 'Entire home' });
    this.minPriceRangeInputBtn = page.locator('[id="price_filter_min"]');
    this.maxPriceRangeInputBtn = page.locator('[id="price_filter_max"]');
    this.increaseNoOfBedRoomsBtn = page.getByTestId('stepper-filter-item-min_bedrooms-stepper-increase-button');
    this.increaseNoOfBedsBtn = page.getByTestId('stepper-filter-item-min_beds-stepper-increase-button');
    this.increaseNoOfBathRoomsBtn = page.getByTestId('stepper-filter-item-min_bathrooms-stepper-increase-button');
    this.decreaseNoOfBedRoomsBtn = page.getByTestId('stepper-filter-item-min_bedrooms-stepper-decrease-button');
    this.decreaseNoOfBedsBtn = page.getByTestId('stepper-filter-item-min_beds-stepper-decrease-button');
    this.decreaseNoOfBathRoomsBtn = page.getByTestId('stepper-filter-item-min_bathrooms-stepper-decrease-button');
    this.noOfBedRoomsValue = page.getByTestId('stepper-filter-item-min_bedrooms-stepper-value');
    this.noOfBedsValue = page.getByTestId('stepper-filter-item-min_beds-stepper-value');
    this.noOfBathRoomsValue = page.getByTestId('stepper-filter-item-min_bathrooms-stepper-value');
    this.showMoreAmenitieaBtn = page.getByRole('button', { name: 'Show more' });
    this.amenitiesWifiBtn = page.getByRole('button', { name: 'Wifi' });
    this.amenitiesHeatingBtn = page.getByRole('button', { name: 'Heating' });
    this.amenitiesIronBtn = page.getByRole('button', { name: 'Iron' });
    this.amenitiesPoolBtn = page.getByRole('button', { name: 'Pool' });
    this.amenitiesGymBtn = page.getByRole('button', { name: 'Gym' });
    this.amenitiesBbqGrillBtn = page.getByRole('button', { name: 'BBQ grill' });
    this.waterFrontBtn = page.getByRole('button', { name: 'Waterfront' });
    this.amenitiesAllowSmokingBtn = page.getByRole('button', { name: 'Smoke alarm' });
    this.instantBookBtn = page.getByRole('button', { name: 'Instant Book' });
    this.allowsPetsBtn = page.getByRole('button', { name: 'Allows pets' });
    this.guestFavoriteBtn = page.getByRole('button', { name: 'Guest favorite' });
    this.propertyTypeSection = page.getByRole('button', { name: 'Property type' });
    this.apartmentBtn = page.getByRole('button', { name: 'Apartment' });
    this.hotelBtn = page.getByRole('button', { name: 'Hotel' });
    this.accessibilityFeaturesSection = page.getByRole('button', { name: 'Accessibility features' });
    this.stepFreeAccessBtn = page.getByRole('checkbox', { name: 'Step-free access' });
    this.bigBedRoomEntranceBtn = page.getByRole('checkbox', { name: 'Bedroom entrance wider than 32 inches' });
    this.toiletGrabBarBtn = page.getByRole('checkbox', { name: 'Toilet grab bar' });
    this.stepFreeShowerBtn = page.getByRole('checkbox', { name: 'Step-free shower' });
    this.ceilingOrMobileHoistBtn = page.getByRole('checkbox', { name: 'Ceiling or mobile hoist' });
    this.hostLanguageSection = page.getByRole('button', { name: 'Host language' });
    this.englishLangBtn = page.getByRole('checkbox', { name: 'English' });
    this.spanishLangBtn = page.getByRole('checkbox', { name: 'Spanish' });
    this.dutchLangBtn = page.getByRole('checkbox', { name: 'Dutch' });
    this.clearAllBtn = page.getByRole('button', { name: 'Clear all' });
    this.showPlaceBtn = page.getByRole('link', { name: 'Show 1,000+ places' });
    this.closeBtn = page.getByRole('button', { name: 'Close' });
  }

  async clearAllFilter() {
    await this.filterBtn.click();
    await this.typeOfPlaceAnyTypeBtn.click();
    await this.typeOfPlaceRoomBtn.click();
    await this.typeOfPlaceEntireHomeBtn.click();
    await expect(this.typeOfPlaceEntireHomeBtn).toBeChecked();
    await this.minPriceRangeInputBtn.fill('120');
    await this.maxPriceRangeInputBtn.fill('4710');
    await this.increaseNoOfBedRoomsBtn.click();
    await expect(this.noOfBedRoomsValue).toContainText('1+');
    await this.increaseNoOfBedsBtn.click();
    await expect(this.noOfBedsValue).toContainText('1+');
    await this.increaseNoOfBathRoomsBtn.click();
    await expect(this.noOfBathRoomsValue).toContainText('1+');
    await this.decreaseNoOfBedRoomsBtn.click();
    await expect(this.noOfBedRoomsValue).toContainText('Any');
    await this.decreaseNoOfBedsBtn.click();
    await expect(this.noOfBedsValue).toContainText('Any');
    await this.decreaseNoOfBathRoomsBtn.click();
    await expect(this.noOfBathRoomsValue).toContainText('Any');
    await this.showMoreAmenitieaBtn.click();
    await this.amenitiesWifiBtn.click();
    await this.amenitiesHeatingBtn.click();
    await this.amenitiesIronBtn.click();
    await this.amenitiesPoolBtn.click();
    await this.amenitiesGymBtn.click();
    await this.amenitiesBbqGrillBtn.click();
    await this.waterFrontBtn.click();
    await this.amenitiesAllowSmokingBtn.click();
    await this.instantBookBtn.click();
    await this.allowsPetsBtn.click();
    await this.guestFavoriteBtn.click();
    await this.propertyTypeSection.click();
    await this.apartmentBtn.click();
    await this.hotelBtn.click();
    await this.accessibilityFeaturesSection.click();
    await this.stepFreeAccessBtn.check();
    await expect(this.stepFreeAccessBtn).toBeChecked();
    await this.stepFreeAccessBtn.uncheck();
    await expect(this.stepFreeAccessBtn).not.toBeChecked();
    await this.bigBedRoomEntranceBtn.check();
    await this.toiletGrabBarBtn.check();
    await this.stepFreeShowerBtn.check();
    await this.ceilingOrMobileHoistBtn.check();
    await this.hostLanguageSection.click();
    await this.englishLangBtn.check();
    await this.spanishLangBtn.check();
    await this.dutchLangBtn.check();
    await this.clearAllBtn.click();
    await this.closeBtn.click();
  }

  async showPlacesFilter() {
    await this.filterBtn.click();
    await this.typeOfPlaceAnyTypeBtn.click();
    await expect(this.typeOfPlaceAnyTypeBtn).toBeChecked();
    await this.minPriceRangeInputBtn.fill('300');
    await this.maxPriceRangeInputBtn.fill('6000');
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await this.increaseNoOfBedRoomsBtn.click({ force: true });
    await expect(this.noOfBedRoomsValue).toContainText('3+');
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await this.decreaseNoOfBedRoomsBtn.click({ force: true });
    await expect(this.noOfBedRoomsValue).toContainText('Any');
    await this.amenitiesWifiBtn.click();
    await this.amenitiesHeatingBtn.click();
    await this.instantBookBtn.click();
    await this.propertyTypeSection.click();
    await this.apartmentBtn.click();
    await this.hostLanguageSection.click();
    await this.englishLangBtn.check();
    await this.clearAllBtn.click();
    await this.showPlaceBtn.click();
  }
}
