import TileMap from './MahjongTilesMap'
import mergeTile from './mergeResult'
import countTile from './countTile'


export const checkUnrelated = (arr) => {
	
	var resultArr;
	
	return resultArr;
}

//assume the arr is sorted
export const check13Terminals = (arr) => {
		
	if(arr.length != 13 || arr.length != 16)
		return [];
	
	var splitArr1 = [], splitArr2 = []; //for terminal part and normal part
	
	
	var resultArr;
	
    var countTileArr = countTile(arr);
	
	
	resultArr = mergeTile(resultArr);
	return resultArr;
}

export default { check13Terminals, checkUnrelated}