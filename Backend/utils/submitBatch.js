const axios=require("axios")
const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'x-rapidapi-key': 'dc5fbde4cdmshe80754b6b34e662p1b0ffejsn342ce7300757',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions: [
      {
        language_id: 46,
        source_code: 'ZWNobyBoZWxsbyBmcm9tIEJhc2gK'
      },
      {
        language_id: 71,
        source_code: 'cHJpbnQoImhlbGxvIGZyb20gUHl0aG9uIikK'
      },
      {
        language_id: 72,
        source_code: 'cHV0cygiaGVsbG8gZnJvbSBSdWJ5IikK'
      }
    ]
  }
};

const submitBatch=async(submissions)=>{
    const response=await axios.request(options)
    // console.log("response",response)
    return response.data;
}
module.exports=submitBatch;