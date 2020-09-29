
exports.min = (array) => {
  try {
    return array.reduce((a,b)=>a<b?a:b)
  } catch (e){
      return 0
    }
  };

exports.max = (array) => {
  try {
    return array.reduce((a,b)=>a>b?a:b);
  } catch (e){
      return 0
    }
  };

exports.avg = (array) => {
  try {
    return (array.reduce((a,b,i)=> a+b))/array.length;
  } catch (e){
      return 0
    }
  };