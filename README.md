# ![LOGO](logo.png) Noosh API application **flow**ground Connector

## Description

A generated **flow**ground connector for the Noosh API application API (version 1.0).

Generated from: https://api.apis.guru/v2/specs/noosh.com/1.0/swagger.json<br/>
Generated at: 2019-05-07T17:43:16+03:00

## API Description

Full description of Noosh API

## Authorization

Supported authorization schemes:
- Basic Authentication

## Actions

### Invite a team member or all the members of team template for the specific project.

*Tags:* `Team Member`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### List the workgroups

*Tags:* `Workgroup`

#### Input Parameters
* `workgroup_name` - _optional_ - Workgroup Name
* `workgroup_types` - _optional_ - 1000001 for Buyer, 1000002 for supplier, 1000003 for agent, 1000004 for Broker/Outsourcer and 1000005 for Partner

### List current user's automatic invitations info

*Tags:* `My Info`

#### Input Parameters
* `workgroup_id` - _required_

### List the buy orders of workgroup

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_

### Get a specific buy order of workgroup

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `order_id` - _required_

### List client workgroups

*Tags:* `Workgroup`

#### Input Parameters
* `workgroup_id` - _required_

### List the project categories of client side

*Tags:* `Project Category`

#### Input Parameters
* `workgroup_id` - _required_
* `client_workgroup_id` - _required_

### List projec home user fields of client workgroup

*Tags:* `User Fields`

#### Input Parameters
* `workgroup_id` - _required_
* `client_workgroup_id` - _required_

### List the project status of client

*Tags:* `Project Status`

#### Input Parameters
* `workgroup_id` - _required_
* `client_workgroup_id` - _required_

### List the contacts

*Tags:* `Contact`

#### Input Parameters
* `workgroup_id` - _required_

### Get custom task status of workgroup level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### Get custom task types of workgroup level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### List all deactivation resons

*Tags:* `Deactivation Reason`

#### Input Parameters
* `workgroup_id` - _required_

### Get default task priority list

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### Get default task status list

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### List my time cards

*Tags:* `Time Card`

#### Input Parameters
* `workgroup_id` - _required_

### Get a specific my time cards

*Tags:* `Time Card`

#### Input Parameters
* `workgroup_id` - _required_
* `timeCard_id` - _required_

### Get product type of workgroup level

*Tags:* `Spec`

#### Input Parameters
* `workgroup_id` - _required_

### List the project categories

*Tags:* `Project Category`

#### Input Parameters
* `workgroup_id` - _required_

### List projec home user fields

*Tags:* `User Fields`

#### Input Parameters
* `workgroup_id` - _required_

### List the project status

*Tags:* `Project Status`

#### Input Parameters
* `workgroup_id` - _required_

### List the projects

*Tags:* `Project`

#### Input Parameters
* `workgroup_id` - _required_

### Create a Project

*Tags:* `Project`

#### Input Parameters
* `workgroup_id` - _required_

### Archieve a specific Project

*Tags:* `Project`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific Project

*Tags:* `Project`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Update a specific Project

*Tags:* `Project`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### List the buy orders

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific buy order

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `order_id` - _required_

### List all the role options for the user

*Tags:* `Team Member Role`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `user_id` - _required_

### List the quotes

*Tags:* `Quote`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific quote of project

*Tags:* `Quote`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `quote_id` - _required_

### Accept / Reject a Quote

*Tags:* `Quote`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `quote_id` - _required_

### List the rfqs

*Tags:* `Rfq`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific Rfq

*Tags:* `Rfq`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `rfq_id` - _required_

### List the sell orders

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific sell order

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `order_id` - _required_

### Accept or reject a specific sell change order

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `order_id` - _required_

### List shipments of project

*Tags:* `Shipment`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Create a shipment

*Tags:* `Shipment`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a specific shipment.

*Tags:* `Shipment`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `shipment_id` - _required_

### Update a specific shipment location

*Tags:* `Shipment`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `shipment_id` - _required_
* `location_id` - _required_

### List specs of project Level

*Tags:* `Spec`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Create a Spec

*Tags:* `Spec`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### List a specific spec of project Level

*Tags:* `Spec`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `spec_id` - _required_

### Get task list of project level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Create a new task

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Get a sepcific task of project level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `task_id` - _required_

### List team member of project.

*Tags:* `Team Member`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Deprecated, please use 1.1 Version

*Tags:* `Team Member`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_

### Delete a team member for the specific project.

*Tags:* `Team Member`

#### Input Parameters
* `workgroup_id` - _required_
* `project_id` - _required_
* `teammember_id` - _required_

### List received time cards

*Tags:* `Time Card`

#### Input Parameters
* `workgroup_id` - _required_

### List a specific received time cards

*Tags:* `Time Card`

#### Input Parameters
* `workgroup_id` - _required_
* `timeCard_id` - _required_

### List the sell orders of workgrop

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_

### Get a specific sell order

*Tags:* `Order`

#### Input Parameters
* `workgroup_id` - _required_
* `order_id` - _required_

### List Spec Templates of Workgroup Level

*Tags:* `Spec Template`

#### Input Parameters
* `workgroup_id` - _required_

### Get a specific Spec Template

*Tags:* `Spec Template`

#### Input Parameters
* `workgroup_id` - _required_
* `spec_template_id` - _required_

### Get Spec Type Fields

*Tags:* `Spec`

#### Input Parameters
* `workgroup_id` - _required_
* `spec_type_id` - _required_

### Get task types of workgroup level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### Get task list of workgroup level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_

### Get a sepcific task of workgroup level

*Tags:* `Task`

#### Input Parameters
* `workgroup_id` - _required_
* `task_id` - _required_

### List current user's team templates info

*Tags:* `My Info`

#### Input Parameters
* `workgroup_id` - _required_

### Get current user's team template detal info

*Tags:* `My Info`

#### Input Parameters
* `workgroup_id` - _required_
* `team_template_id` - _required_

### List the workgroup members

*Tags:* `Workgroup Members`

#### Input Parameters
* `workgroup_id` - _required_

## License

**flow**ground :- Telekom iPaaS / noosh-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
