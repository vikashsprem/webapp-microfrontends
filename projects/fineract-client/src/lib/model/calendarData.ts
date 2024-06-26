/**
 * Apache Fineract REST API
 * Apache Fineract is a secure, multi-tenanted microfinance platform. The goal of the Apache Fineract API is to empower developers to build apps on top of the Apache Fineract Platform. The https://cui.fineract.dev[reference app] (username: mifos, password: password) works on the same demo tenant as the interactive links in this documentation. Until we complete the new REST API documentation you still have the legacy documentation available https://fineract.apache.org/legacy-docs/apiLive.htm[here]. Please check https://fineract.apache.org/docs/current[the Fineract documentation] for more information.
 *
 * The version of the OpenAPI document: 1.11.0-SNAPSHOT
 * Contact: dev@fineract.apache.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LocalTime } from './localTime';
import { EnumOptionData } from './enumOptionData';


export interface CalendarData { 
    calendarInstanceId?: number;
    calendarTypeOptions?: Array<EnumOptionData>;
    centerId?: string;
    createdByUserId?: number;
    createdByUsername?: string;
    createdDate?: string;
    dateFormat?: string;
    description?: string;
    duration?: number;
    endDate?: string;
    entityId?: number;
    entityType?: EnumOptionData;
    entityTypeOptions?: Array<EnumOptionData>;
    firstReminder?: number;
    frequency?: EnumOptionData;
    frequencyNthDayTypeOptions?: Array<EnumOptionData>;
    frequencyOptions?: Array<EnumOptionData>;
    humanReadable?: string;
    id?: number;
    interval?: number;
    lastUpdatedByUserId?: number;
    lastUpdatedByUsername?: string;
    lastUpdatedDate?: string;
    locale?: string;
    location?: string;
    meetingTime?: LocalTime;
    nextTenRecurringDates?: Array<string>;
    recentEligibleMeetingDate?: string;
    recurrence?: string;
    recurringDates?: Array<string>;
    remindBy?: EnumOptionData;
    remindByOptions?: Array<EnumOptionData>;
    repeating?: boolean;
    repeatsOnDay?: EnumOptionData;
    repeatsOnDayOfMonth?: number;
    repeatsOnDayOptions?: Array<EnumOptionData>;
    repeatsOnNthDayOfMonth?: EnumOptionData;
    rowIndex?: number;
    secondReminder?: number;
    startDate?: string;
    title?: string;
    type?: EnumOptionData;
    typeId?: string;
}

