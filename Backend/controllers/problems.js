const getLanguageById = require("../utils/getLanguageById");
const submitBatch = require("../utils/submitBatch");

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
            const languageId=getLanguageById(language)
            // creating batch for submissions 
            const submissions=visibleTestCases.map((input,output)=>({
                source_code:completeCode,
                language_id:languageId,
                stdin:input,
                expected_output:output
            }))

            const submitResult=await submitBatch(submissions)
        }
    } catch (error) {
        
    }
}