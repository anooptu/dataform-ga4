const getEventParam = (
    paramKey,
    paramType = "string",
    reqColumnName = false
) => {
    let actualParamType = "";
    switch(paramType) {
        case "string":
            actualParamType = "string_value";
            break;
        case "int":
            actualParamType = "int_value";
            break;
        case "double":
            actualParamType = "double_value";
            break;
        case "float":
            actualParamType = "float_value";
            break;
        default:
            throw "paramType is not valid. Please check again.";
    }
    return `(SELECT ep.value.${actualParamType} FROM UNNEST(event_params) ep WHERE ep.key = '${paramKey}') AS ${reqColumnName ? reqColumnName : paramKey}`;
};

module.exports = { getEventParam };
