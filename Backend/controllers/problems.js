const createProblem=async(req,res)=>{
    const {title,description,difficulty,tags,visibleTestCases,hiddenTestCases,startCode,referenceSolution,problemCreator}=req.body;
    if(!title|| !description || !difficulty ||!tags || !visibleTestCases || !hiddenTestCases || !startCode || !referenceSolution || !problemCreator){
        return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
    }

    try {
        for(const {language,completeCode} of referenceSolution){
            
        }
    } catch (error) {
        
    }
}