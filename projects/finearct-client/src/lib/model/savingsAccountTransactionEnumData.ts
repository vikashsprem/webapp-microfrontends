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


export interface SavingsAccountTransactionEnumData { 
    accrual?: boolean;
    amountHold?: boolean;
    amountRelease?: boolean;
    annualFee?: boolean;
    approveTransfer?: boolean;
    chargeTransaction?: boolean;
    code?: string;
    credit?: boolean;
    debit?: boolean;
    deposit?: boolean;
    depositOrWithdrawal?: boolean;
    dividendPayout?: boolean;
    entryType?: SavingsAccountTransactionEnumData.EntryTypeEnum;
    escheat?: boolean;
    feeDeduction?: boolean;
    id?: number;
    incomeFromInterest?: boolean;
    initiateTransfer?: boolean;
    interestPosting?: boolean;
    overDraftInterestPosting?: boolean;
    overdraftFee?: boolean;
    overdraftInterest?: boolean;
    payCharge?: boolean;
    rejectTransfer?: boolean;
    transactionTypeEnum?: SavingsAccountTransactionEnumData.TransactionTypeEnumEnum;
    value?: string;
    withdrawTransfer?: boolean;
    withdrawal?: boolean;
    withdrawalFee?: boolean;
    withholdTax?: boolean;
    writtenoff?: boolean;
}
export namespace SavingsAccountTransactionEnumData {
    export type EntryTypeEnum = 'CREDIT' | 'DEBIT';
    export const EntryTypeEnum = {
        Credit: 'CREDIT' as EntryTypeEnum,
        Debit: 'DEBIT' as EntryTypeEnum
    };
    export type TransactionTypeEnumEnum = 'INVALID' | 'DEPOSIT' | 'WITHDRAWAL' | 'INTEREST_POSTING' | 'WITHDRAWAL_FEE' | 'ANNUAL_FEE' | 'WAIVE_CHARGES' | 'PAY_CHARGE' | 'DIVIDEND_PAYOUT' | 'ACCRUAL' | 'INITIATE_TRANSFER' | 'APPROVE_TRANSFER' | 'WITHDRAW_TRANSFER' | 'REJECT_TRANSFER' | 'WRITTEN_OFF' | 'OVERDRAFT_INTEREST' | 'WITHHOLD_TAX' | 'ESCHEAT' | 'AMOUNT_HOLD' | 'AMOUNT_RELEASE';
    export const TransactionTypeEnumEnum = {
        Invalid: 'INVALID' as TransactionTypeEnumEnum,
        Deposit: 'DEPOSIT' as TransactionTypeEnumEnum,
        Withdrawal: 'WITHDRAWAL' as TransactionTypeEnumEnum,
        InterestPosting: 'INTEREST_POSTING' as TransactionTypeEnumEnum,
        WithdrawalFee: 'WITHDRAWAL_FEE' as TransactionTypeEnumEnum,
        AnnualFee: 'ANNUAL_FEE' as TransactionTypeEnumEnum,
        WaiveCharges: 'WAIVE_CHARGES' as TransactionTypeEnumEnum,
        PayCharge: 'PAY_CHARGE' as TransactionTypeEnumEnum,
        DividendPayout: 'DIVIDEND_PAYOUT' as TransactionTypeEnumEnum,
        Accrual: 'ACCRUAL' as TransactionTypeEnumEnum,
        InitiateTransfer: 'INITIATE_TRANSFER' as TransactionTypeEnumEnum,
        ApproveTransfer: 'APPROVE_TRANSFER' as TransactionTypeEnumEnum,
        WithdrawTransfer: 'WITHDRAW_TRANSFER' as TransactionTypeEnumEnum,
        RejectTransfer: 'REJECT_TRANSFER' as TransactionTypeEnumEnum,
        WrittenOff: 'WRITTEN_OFF' as TransactionTypeEnumEnum,
        OverdraftInterest: 'OVERDRAFT_INTEREST' as TransactionTypeEnumEnum,
        WithholdTax: 'WITHHOLD_TAX' as TransactionTypeEnumEnum,
        Escheat: 'ESCHEAT' as TransactionTypeEnumEnum,
        AmountHold: 'AMOUNT_HOLD' as TransactionTypeEnumEnum,
        AmountRelease: 'AMOUNT_RELEASE' as TransactionTypeEnumEnum
    };
}


