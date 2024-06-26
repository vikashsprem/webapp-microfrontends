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
import { GetSavingsProductsInterestCalculationDaysInYearType } from './getSavingsProductsInterestCalculationDaysInYearType';
import { GetSavingsProductsPaymentChannelToFundSourceMappings } from './getSavingsProductsPaymentChannelToFundSourceMappings';
import { GetSavingsProductsInterestCalculationType } from './getSavingsProductsInterestCalculationType';
import { GetSavingsCurrency } from './getSavingsCurrency';
import { GetSavingsProductsFeeToIncomeAccountMappings } from './getSavingsProductsFeeToIncomeAccountMappings';
import { GetSavingsProductsInterestCompoundingPeriodType } from './getSavingsProductsInterestCompoundingPeriodType';
import { GetSavingsProductsAccountingMappings } from './getSavingsProductsAccountingMappings';
import { GetSavingsProductsInterestPostingPeriodType } from './getSavingsProductsInterestPostingPeriodType';
import { GetSavingsProductsPenaltyToIncomeAccountMappings } from './getSavingsProductsPenaltyToIncomeAccountMappings';
import { GetSavingsProductsAccountingRule } from './getSavingsProductsAccountingRule';


/**
 * GetSavingsProductsProductIdResponse
 */
export interface GetSavingsProductsProductIdResponse { 
    accountingMappings?: GetSavingsProductsAccountingMappings;
    accountingRule?: GetSavingsProductsAccountingRule;
    charges?: Array<number>;
    currency?: GetSavingsCurrency;
    description?: string;
    feeToIncomeAccountMappings?: Set<GetSavingsProductsFeeToIncomeAccountMappings>;
    id?: number;
    interestCalculationDaysInYearType?: GetSavingsProductsInterestCalculationDaysInYearType;
    interestCalculationType?: GetSavingsProductsInterestCalculationType;
    interestCompoundingPeriodType?: GetSavingsProductsInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetSavingsProductsInterestPostingPeriodType;
    name?: string;
    nominalAnnualInterestRate?: number;
    paymentChannelToFundSourceMappings?: Set<GetSavingsProductsPaymentChannelToFundSourceMappings>;
    penaltyToIncomeAccountMappings?: Set<GetSavingsProductsPenaltyToIncomeAccountMappings>;
    shortName?: string;
    withdrawalFeeForTransfers?: boolean;
}

