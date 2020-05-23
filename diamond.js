 function diamond(c){
       var result = new String[2 * (c - 64) - 1];
 		if (c == 'A') {
  			result[0] = "A";
 		} else if (c == 'B') {
 			result[0] = "-A-";
  			result[1] = "B-B";
  			result[2] = "-A-";
 		} else if (c == 'C') {
 			result[0] = "--A--";
 			result[1] = "-B-B-";
 			result[2] = "C---C";
 			result[3] = "-B-B-";
 			result[4] = "--A--";
 		} else if (c == 'D') {
 			result[0] = "---A---";
 			result[1] = "--B-B--";
                        result[2] = "-C---C-";
 			result[3] = "D-----D";
 			result[4] = "-C---C-";
 			result[5] = "--B-B--";
 			result[6] = "---A---";
 		} else if (c == 'E') {
 			result[0] = "----A----";
 			result[1] = "---B-B---";
			result[2] = "--C---C--";
			result[3] = "-D-----D-";
  	                result[4] = "E-------E";
                        result[5] = "-D-----D-";
                        result[6] = "--C---C--";
                        result[7] = "---B-B---";
                        result[8] = "----A----";
		} else if (c == 'F') {
                        result[0] = "-----A-----";
                        result[1] = "----B-B----";
                        result[2] = "---C---C---";
                        result[3] = "--D-----D--";
                        result[4] = "-E-------E-";
                        result[5] = "F---------F";
                        result[6] = "-E-------E-";
                        result[7] = "--D-----D--";
                        result[8] = "---C---C---";
                        result[9] = "----B-B----";
                       result[10] = "-----A-----";		
  	        }
 return result;
   
  module.exports = {
    diamond
 }

