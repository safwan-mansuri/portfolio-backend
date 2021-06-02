'use strict';

const getProject = (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({message: "hello bro !@!!!"})
  };
  return response;
}

module.exports = getProject;
