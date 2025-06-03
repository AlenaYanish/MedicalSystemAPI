# MedicalSystemApi.DefaultApi

All URIs are relative to *http://localhost:8080/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appointmentsGet**](DefaultApi.md#appointmentsGet) | **GET** /appointments | Отримати список усіх записів на прийом
[**appointmentsIdDelete**](DefaultApi.md#appointmentsIdDelete) | **DELETE** /appointments/{id} | Видалити запис
[**appointmentsIdGet**](DefaultApi.md#appointmentsIdGet) | **GET** /appointments/{id} | Отримати інформацію про запис за ID
[**appointmentsIdPut**](DefaultApi.md#appointmentsIdPut) | **PUT** /appointments/{id} | Оновити інформацію про запис
[**appointmentsPost**](DefaultApi.md#appointmentsPost) | **POST** /appointments | Створити новий запис на прийом
[**doctorsGet**](DefaultApi.md#doctorsGet) | **GET** /doctors | Отримати список усіх лікарів
[**doctorsIdDelete**](DefaultApi.md#doctorsIdDelete) | **DELETE** /doctors/{id} | Видалити лікаря
[**doctorsIdGet**](DefaultApi.md#doctorsIdGet) | **GET** /doctors/{id} | Отримати інформацію про лікаря за ID
[**doctorsIdPut**](DefaultApi.md#doctorsIdPut) | **PUT** /doctors/{id} | Оновити інформацію про лікаря
[**doctorsIdScheduleGet**](DefaultApi.md#doctorsIdScheduleGet) | **GET** /doctors/{id}/schedule | Отримати розклад лікаря за період
[**doctorsPost**](DefaultApi.md#doctorsPost) | **POST** /doctors | Додати нового лікаря

<a name="appointmentsGet"></a>
# **appointmentsGet**
> [Appointment] appointmentsGet(opts)

Отримати список усіх записів на прийом

Повертає список усіх записів на прийом у системі з можливістю фільтрації.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let opts = { 
  'doctorId': 56, // Number | Фільтрувати за ідентифікатором лікаря
  'patientId': 56, // Number | Фільтрувати за ідентифікатором пацієнта
  'from': new Date("2013-10-20"), // Date | Фільтрувати за початковою датою (YYYY-MM-DD)
  'to': new Date("2013-10-20"), // Date | Фільтрувати за кінцевою датою (YYYY-MM-DD)
  'status': "status_example" // String | Фільтрувати за статусом запису (scheduled, completed, cancelled)
};
apiInstance.appointmentsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **doctorId** | **Number**| Фільтрувати за ідентифікатором лікаря | [optional] 
 **patientId** | **Number**| Фільтрувати за ідентифікатором пацієнта | [optional] 
 **from** | **Date**| Фільтрувати за початковою датою (YYYY-MM-DD) | [optional] 
 **to** | **Date**| Фільтрувати за кінцевою датою (YYYY-MM-DD) | [optional] 
 **status** | **String**| Фільтрувати за статусом запису (scheduled, completed, cancelled) | [optional] 

### Return type

[**[Appointment]**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="appointmentsIdDelete"></a>
# **appointmentsIdDelete**
> appointmentsIdDelete(id)

Видалити запис

Видаляє запис на прийом за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let id = 56; // Number | Ідентифікатор запису

apiInstance.appointmentsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Ідентифікатор запису | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="appointmentsIdGet"></a>
# **appointmentsIdGet**
> Appointment appointmentsIdGet(id)

Отримати інформацію про запис за ID

Повертає інформацію про запис на прийом за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let id = 56; // Number | Ідентифікатор запису

apiInstance.appointmentsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Ідентифікатор запису | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="appointmentsIdPut"></a>
# **appointmentsIdPut**
> Appointment appointmentsIdPut(body, id)

Оновити інформацію про запис

Оновлює інформацію про запис на прийом за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let body = new MedicalSystemApi.Appointment(); // Appointment | 
let id = 56; // Number | Ідентифікатор запису

apiInstance.appointmentsIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Appointment**](Appointment.md)|  | 
 **id** | **Number**| Ідентифікатор запису | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appointmentsPost"></a>
# **appointmentsPost**
> Appointment appointmentsPost(body)

Створити новий запис на прийом

Створює новий запис на прийом.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let body = new MedicalSystemApi.Appointment(); // Appointment | 

apiInstance.appointmentsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Appointment**](Appointment.md)|  | 

### Return type

[**Appointment**](Appointment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doctorsGet"></a>
# **doctorsGet**
> [Doctor] doctorsGet(opts)

Отримати список усіх лікарів

Повертає список усіх лікарів у системі.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let opts = { 
  'speciality': "speciality_example", // String | Фільтрувати за спеціальністю лікаря
  'search': "search_example" // String | Пошук за іменем або спеціальністю лікаря
};
apiInstance.doctorsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **speciality** | **String**| Фільтрувати за спеціальністю лікаря | [optional] 
 **search** | **String**| Пошук за іменем або спеціальністю лікаря | [optional] 

### Return type

[**[Doctor]**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="doctorsIdDelete"></a>
# **doctorsIdDelete**
> doctorsIdDelete(id)

Видалити лікаря

Видаляє лікаря за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let id = 56; // Number | Ідентифікатор лікаря

apiInstance.doctorsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Ідентифікатор лікаря | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="doctorsIdGet"></a>
# **doctorsIdGet**
> Doctor doctorsIdGet(id)

Отримати інформацію про лікаря за ID

Повертає інформацію про лікаря за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let id = 56; // Number | Ідентифікатор лікаря

apiInstance.doctorsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Ідентифікатор лікаря | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="doctorsIdPut"></a>
# **doctorsIdPut**
> Doctor doctorsIdPut(body, id)

Оновити інформацію про лікаря

Оновлює інформацію про лікаря за вказаним ідентифікатором.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let body = new MedicalSystemApi.Doctor(); // Doctor | 
let id = 56; // Number | Ідентифікатор лікаря

apiInstance.doctorsIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Doctor**](Doctor.md)|  | 
 **id** | **Number**| Ідентифікатор лікаря | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="doctorsIdScheduleGet"></a>
# **doctorsIdScheduleGet**
> [InlineResponse200] doctorsIdScheduleGet(id, from, to)

Отримати розклад лікаря за період

Повертає розклад прийому лікаря за вказаний період.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let id = 56; // Number | Ідентифікатор лікаря
let from = new Date("2013-10-20"); // Date | Початкова дата періоду (YYYY-MM-DD)
let to = new Date("2013-10-20"); // Date | Кінцева дата періоду (YYYY-MM-DD)

apiInstance.doctorsIdScheduleGet(id, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Ідентифікатор лікаря | 
 **from** | **Date**| Початкова дата періоду (YYYY-MM-DD) | 
 **to** | **Date**| Кінцева дата періоду (YYYY-MM-DD) | 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="doctorsPost"></a>
# **doctorsPost**
> Doctor doctorsPost(body)

Додати нового лікаря

Додає нового лікаря до системи.

### Example
```javascript
import {MedicalSystemApi} from 'medical_system_api';

let apiInstance = new MedicalSystemApi.DefaultApi();
let body = new MedicalSystemApi.Doctor(); // Doctor | 

apiInstance.doctorsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Doctor**](Doctor.md)|  | 

### Return type

[**Doctor**](Doctor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

