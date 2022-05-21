export const mergeSort=array=>{
	let length=array.length;
	if(array.length===1)return array

	const middle=Math.floor(length/2);
	const first=mergeSort(array.slice(0,middle));
	const last=mergeSort(array.slice(middle));

	const sortedArray=[];
	let i=0,j=0;
	while(i<first.length&&j<last.length){
		if(first[i]<last[j])sortedArray.push(first[i++])
		else {sortedArray.push(last[j++])}
	}

	while (i<first.length)sortedArray.push(first[i++]);
	while (j<last.length)sortedArray.push(last[j++])
	return sortedArray;
}