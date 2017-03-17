var isRealString =(str) =>{
	return typeof str ==="string" && str.toLowerCase().trim().length>0;
};
module.exports={isRealString};