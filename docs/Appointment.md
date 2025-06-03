# MedicalSystemApi.Appointment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Унікальний ідентифікатор запису | [optional] 
**doctorId** | **Number** | Ідентифікатор лікаря | 
**patientId** | **Number** | Ідентифікатор пацієнта | 
**appointmentDatetime** | **Date** | Дата та час прийому (YYYY-MM-DDTHH:mm:ssZ) | 
**status** | **String** | Статус запису | [optional] [default to &#x27;scheduled&#x27;]
**reason** | **String** | Причина звернення | [optional] 
**diagnosis** | **String** | Попередній або остаточний діагноз | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `scheduled` (value: `"scheduled"`)
* `completed` (value: `"completed"`)
* `cancelled` (value: `"cancelled"`)

