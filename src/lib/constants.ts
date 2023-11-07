export const DEFAULT_VIDEO_START_OFFSET = 0;
export const DEFAULT_VIDEO_END_OFFSET = -30;
export const IS_OCTOBER = new Date().getMonth() === 9;
export const IS_DECEMBER = new Date().getMonth() === 11;
export const IS_HALLOWEEN = IS_OCTOBER && new Date().getDate() === 31;
export const IS_CHRISTMAS = IS_DECEMBER && new Date().getDate() === 25;
