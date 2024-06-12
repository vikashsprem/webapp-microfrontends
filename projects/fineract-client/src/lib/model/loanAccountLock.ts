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


export interface LoanAccountLock { 
    error?: string;
    loanId?: number;
    lockOwner?: LoanAccountLock.LockOwnerEnum;
    lockPlacedOn?: string;
    lockPlacedOnCobBusinessDate?: string;
    newLockOwner?: LoanAccountLock.NewLockOwnerEnum;
    stacktrace?: string;
    version?: number;
}
export namespace LoanAccountLock {
    export type LockOwnerEnum = 'LOAN_COB_CHUNK_PROCESSING' | 'LOAN_INLINE_COB_PROCESSING';
    export const LockOwnerEnum = {
        CobChunkProcessing: 'LOAN_COB_CHUNK_PROCESSING' as LockOwnerEnum,
        InlineCobProcessing: 'LOAN_INLINE_COB_PROCESSING' as LockOwnerEnum
    };
    export type NewLockOwnerEnum = 'LOAN_COB_CHUNK_PROCESSING' | 'LOAN_INLINE_COB_PROCESSING';
    export const NewLockOwnerEnum = {
        CobChunkProcessing: 'LOAN_COB_CHUNK_PROCESSING' as NewLockOwnerEnum,
        InlineCobProcessing: 'LOAN_INLINE_COB_PROCESSING' as NewLockOwnerEnum
    };
}

