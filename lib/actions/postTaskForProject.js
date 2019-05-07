/**
 * Auto-generated action file for "Noosh API application" API.
 *
 * Generated at: 2019-05-07T14:43:16.421Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / noosh-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'postTaskForProject'
 * Endpoint Path: '/v1/workgroups/{workgroup_id}/projects/{project_id}/tasks'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "workgroup_id",
    "project_id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "workgroup_id": "workgroup_id",
    "project_id": "project_id",
    "actual_duration": "actual_duration",
    "actual_duration_hour": "actual_duration_hour",
    "actual_end_date": "actual_end_date",
    "actual_start_date": "actual_start_date",
    "assign_to_user_id": "assign_to_user_id",
    "comments": "comments",
    "contributors": "contributors",
    "custom_status_id": "custom_status_id",
    "description": "description",
    "name": "name",
    "percentage_complete": "percentage_complete",
    "priority": "priority",
    "revised_duration": "revised_duration",
    "revised_duration_hour": "revised_duration_hour",
    "revised_end_date": "revised_end_date",
    "revised_start_date": "revised_start_date",
    "status_id": "status_id",
    "task_id": "task_id",
    "task_type_id": "task_type_id",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['HTTP_BASIC'] = {username: cfg.username, password: cfg.password};;

    let callParams = {
        spec: spec,
        operationId: 'postTaskForProject',
        pathName: '/v1/workgroups/{workgroup_id}/projects/{project_id}/tasks',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}