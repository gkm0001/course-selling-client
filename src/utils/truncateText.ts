export const truncateText = (text:string , limit : number) : string => {
     if(!text) return "";
     if(limit == 0) return "";
     let arr = text.split("");
     let truncatetext = [];
     for(let i = 0 ; i < arr.length;i++){
        truncatetext.push(arr[i]);
        if(truncatetext.length >= 26){
             text = truncatetext.join("") + "..." ;
             break;
        }
     }

     return text;
}