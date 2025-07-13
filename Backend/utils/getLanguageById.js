const getLanguageById=async(lang)=>{
    const language={
        "c++":54,
        "java":62,
        "javascript":63
    }
    return language[lang.toLowerCase()];
}
module.exports=getLanguageById