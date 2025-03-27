function random (len:number){
    
    const options = "aquickbrownfoxjumpsoverthelazydogaquickbrownfoxjumpsoverthelazydog";
    
    const length = options.length;
    
    let ans = "";
    
    for(let i=0; i<len; i++){
      ans += options[Math.floor(Math.random() * 10)];
    }
    
    return ans;
    
}