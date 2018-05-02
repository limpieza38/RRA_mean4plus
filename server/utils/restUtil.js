function handleSuccess(result, res){
  res.json(result.data);
}
function handleError(result, res){
  res.status(result.status).json(result.message);
}
function handleNoContentFound(res){
  res.status(204).send();
}

module.exports = { handleSuccess, handleError, handleNoContentFound };
