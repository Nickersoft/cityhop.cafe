import drives, { driveMap } from './drives';
import walks, { walkMap } from './walks';

export default [...walks, ...drives];

export const sceneMap = {
	...walkMap,
	...driveMap
};
