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
import { GetRecurringDepositProductsProductIdMinDepositTermType } from './getRecurringDepositProductsProductIdMinDepositTermType';
import { GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings } from './getRecurringDepositProductsProductIdFeeToIncomeAccountMappings';
import { GetRecurringDepositProductsProductIdInterestCompoundingPeriodType } from './getRecurringDepositProductsProductIdInterestCompoundingPeriodType';
import { GetRecurringDepositProductsProductIdMaxDepositTermType } from './getRecurringDepositProductsProductIdMaxDepositTermType';
import { GetRecurringDepositProductsRecurringDepositFrequencyType } from './getRecurringDepositProductsRecurringDepositFrequencyType';
import { GetRecurringDepositProductsProductIdCurrency } from './getRecurringDepositProductsProductIdCurrency';
import { GetRecurringDepositProductsProductIdAccountingMappings } from './getRecurringDepositProductsProductIdAccountingMappings';
import { GetRecurringDepositProductsInterestPostingPeriodType } from './getRecurringDepositProductsInterestPostingPeriodType';
import { GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings } from './getRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings';
import { GetRecurringDepositProductsInterestCalculationType } from './getRecurringDepositProductsInterestCalculationType';
import { GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType } from './getRecurringDepositProductsProductIdPreClosurePenalInterestOnType';
import { GetRecurringDepositProductsProductIdActiveChart } from './getRecurringDepositProductsProductIdActiveChart';
import { GetRecurringDepositProductsInterestCalculationDaysInYearType } from './getRecurringDepositProductsInterestCalculationDaysInYearType';


/**
 * GetRecurringDepositProductsProductIdResponse
 */
export interface GetRecurringDepositProductsProductIdResponse { 
    accountingMappings?: GetRecurringDepositProductsProductIdAccountingMappings;
    activeChart?: GetRecurringDepositProductsProductIdActiveChart;
    currency?: GetRecurringDepositProductsProductIdCurrency;
    description?: string;
    feeToIncomeAccountMappings?: Set<GetRecurringDepositProductsProductIdFeeToIncomeAccountMappings>;
    id?: number;
    interestCalculationDaysInYearType?: GetRecurringDepositProductsInterestCalculationDaysInYearType;
    interestCalculationType?: GetRecurringDepositProductsInterestCalculationType;
    interestCompoundingPeriodType?: GetRecurringDepositProductsProductIdInterestCompoundingPeriodType;
    interestPostingPeriodType?: GetRecurringDepositProductsInterestPostingPeriodType;
    maxDepositTerm?: number;
    maxDepositTermType?: GetRecurringDepositProductsProductIdMaxDepositTermType;
    minDepositTerm?: number;
    minDepositTermType?: GetRecurringDepositProductsProductIdMinDepositTermType;
    name?: string;
    penaltyToIncomeAccountMappings?: Set<GetRecurringDepositProductsProductIdPenaltyToIncomeAccountMappings>;
    preClosurePenalApplicable?: boolean;
    preClosurePenalInterest?: number;
    preClosurePenalInterestOnType?: GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType;
    recurringDepositFrequency?: number;
    recurringDepositFrequencyType?: GetRecurringDepositProductsRecurringDepositFrequencyType;
    shortName?: string;
}

