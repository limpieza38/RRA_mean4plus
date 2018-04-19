function handleSuccess(result, res){
  res.json(result.data);
}
function handleError(result, res){
  res.status(result.status).json(result.message);
}

module.exports = { handleSuccess, handleError };
