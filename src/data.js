export const API_KEY= "AIzaSyBa2tFpIXNIQyIYc6OIUS1Ajf_BN47Lkxk";

export const value_Converter=(value)=>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}