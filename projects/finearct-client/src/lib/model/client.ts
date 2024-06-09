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
import { Office } from './office';
import { Group } from './group';
import { ClientIdentifier } from './clientIdentifier';
import { ExternalId } from './externalId';
import { Staff } from './staff';
import { CodeValue } from './codeValue';
import { AppUser } from './appUser';
import { Image } from './image';


export interface Client { 
    accountNumber?: string;
    accountNumberRequiresAutoGeneration?: boolean;
    activatedBy?: AppUser;
    activationDate?: string;
    active?: boolean;
    clientClassification?: CodeValue;
    clientType?: CodeValue;
    closed?: boolean;
    closedBy?: AppUser;
    closureDate?: string;
    closureReason?: CodeValue;
    createdBy: number;
    createdDate: string;
    createdDateTime: string;
    dateOfBirth?: string;
    displayName?: string;
    emailAddress?: string;
    externalId?: ExternalId;
    firstname?: string;
    fullname?: string;
    gender?: CodeValue;
    groups?: Set<Group>;
    id?: number;
    identifiers?: Set<ClientIdentifier>;
    image?: Image;
    lastModifiedBy: number;
    lastModifiedDate: string;
    lastModifiedDateTime: string;
    lastname?: string;
    legalForm?: number;
    middlename?: string;
    mobileNo?: string;
    _new?: boolean;
    notActive?: boolean;
    notPending?: boolean;
    notStaff?: boolean;
    office?: Office;
    officeJoiningDate?: string;
    pending?: boolean;
    proposedTransferDate?: string;
    reactivateDate?: string;
    reactivatedBy?: AppUser;
    rejected?: boolean;
    rejectedBy?: AppUser;
    rejectedDate?: string;
    rejectionDate?: string;
    rejectionReason?: CodeValue;
    reopenedBy?: AppUser;
    reopenedDate?: string;
    savingsAccountId?: number;
    savingsProductId?: number;
    staff?: Staff;
    status?: number;
    subStatus?: CodeValue;
    submittedOnDate?: string;
    transferInProgress?: boolean;
    transferInProgressOrOnHold?: boolean;
    transferOnHold?: boolean;
    transferToOffice?: Office;
    withdrawalDate?: string;
    withdrawalReason?: CodeValue;
    withdrawn?: boolean;
    withdrawnBy?: AppUser;
}

