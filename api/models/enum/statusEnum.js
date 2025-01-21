class StatusEnum {
  statusCodes = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  };

  statusMessages = {
    SUCCESS: "Success",
    CREATED: "Created",
    NO_CONTENT: "No Content",
    BAD_REQUEST: "Bad Request",
    NOT_FOUND: "Not Found",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
  };
}

module.exports = new StatusEnum();
