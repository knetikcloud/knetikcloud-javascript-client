/**
 * Knetik Platform API Documentation latest 
 * This is the spec for the Knetik API.  Use this in conjunction with the documentation found at https://knetikcloud.com.
 *
 * OpenAPI spec version: latest 
 * Contact: support@knetik.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Property'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Property'));
  } else {
    // Browser globals (root is window)
    if (!root.KnetikCloud) {
      root.KnetikCloud = {};
    }
    root.KnetikCloud.SubscriptionPlanResource = factory(root.KnetikCloud.ApiClient, root.KnetikCloud.Property);
  }
}(this, function(ApiClient, Property) {
  'use strict';




  /**
   * The SubscriptionPlanResource model module.
   * @module model/SubscriptionPlanResource
   * @version 3.0.13
   */

  /**
   * Constructs a new <code>SubscriptionPlanResource</code>.
   * @alias module:model/SubscriptionPlanResource
   * @class
   * @param billingCycleLength {Number} The length of the billing cycle in number of billing cycle unit
   * @param billingCycleUnit {module:model/SubscriptionPlanResource.BillingCycleUnitEnum} The time period unit to apply to the length of billing cycles
   * @param consolidated {Boolean} Whether this plan will be renewed on the consolidated billing cycle
   * @param currencyCode {String} The ISO3 currency code to use for the fees
   * @param gracePeriod {Number} The number of late payment days before a subscription is canceled
   * @param initialFee {Number} The fee charged when the subscription is purchased
   * @param latePaymentFee {Number} The fee to add to the bill when an invoice has gone unpaid passed the grace period
   * @param maxBillAttempts {Number} The number of charge attempts before the subscription becomes delinquent
   * @param name {String} The name of the plan used to generate the SKUs
   * @param published {Boolean} Whether this plan is currently available
   * @param reactivationFee {Number} The fee to charge when a suspended subscription is to be re-activated
   * @param recurringFee {Number} The recurring fee to charge for each renewal
   */
  var exports = function(billingCycleLength, billingCycleUnit, consolidated, currencyCode, gracePeriod, initialFee, latePaymentFee, maxBillAttempts, name, published, reactivationFee, recurringFee) {
    var _this = this;


    _this['billing_cycle_length'] = billingCycleLength;
    _this['billing_cycle_unit'] = billingCycleUnit;
    _this['consolidated'] = consolidated;
    _this['currency_code'] = currencyCode;



    _this['grace_period'] = gracePeriod;

    _this['initial_fee'] = initialFee;

    _this['late_payment_fee'] = latePaymentFee;


    _this['max_bill_attempts'] = maxBillAttempts;



    _this['name'] = name;
    _this['published'] = published;
    _this['reactivation_fee'] = reactivationFee;

    _this['recurring_fee'] = recurringFee;


  };

  /**
   * Constructs a <code>SubscriptionPlanResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionPlanResource} obj Optional instance to populate.
   * @return {module:model/SubscriptionPlanResource} The populated <code>SubscriptionPlanResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additional_properties')) {
        obj['additional_properties'] = ApiClient.convertToType(data['additional_properties'], {'String': Property});
      }
      if (data.hasOwnProperty('billing_cycle_length')) {
        obj['billing_cycle_length'] = ApiClient.convertToType(data['billing_cycle_length'], 'Number');
      }
      if (data.hasOwnProperty('billing_cycle_unit')) {
        obj['billing_cycle_unit'] = ApiClient.convertToType(data['billing_cycle_unit'], 'String');
      }
      if (data.hasOwnProperty('consolidated')) {
        obj['consolidated'] = ApiClient.convertToType(data['consolidated'], 'Boolean');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Number');
      }
      if (data.hasOwnProperty('first_billing_cycle_length')) {
        obj['first_billing_cycle_length'] = ApiClient.convertToType(data['first_billing_cycle_length'], 'Number');
      }
      if (data.hasOwnProperty('first_billing_cycle_unit')) {
        obj['first_billing_cycle_unit'] = ApiClient.convertToType(data['first_billing_cycle_unit'], 'String');
      }
      if (data.hasOwnProperty('grace_period')) {
        obj['grace_period'] = ApiClient.convertToType(data['grace_period'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('initial_fee')) {
        obj['initial_fee'] = ApiClient.convertToType(data['initial_fee'], 'Number');
      }
      if (data.hasOwnProperty('initial_sku')) {
        obj['initial_sku'] = ApiClient.convertToType(data['initial_sku'], 'String');
      }
      if (data.hasOwnProperty('late_payment_fee')) {
        obj['late_payment_fee'] = ApiClient.convertToType(data['late_payment_fee'], 'Number');
      }
      if (data.hasOwnProperty('late_payment_sku')) {
        obj['late_payment_sku'] = ApiClient.convertToType(data['late_payment_sku'], 'String');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('max_bill_attempts')) {
        obj['max_bill_attempts'] = ApiClient.convertToType(data['max_bill_attempts'], 'Number');
      }
      if (data.hasOwnProperty('max_cycles')) {
        obj['max_cycles'] = ApiClient.convertToType(data['max_cycles'], 'Number');
      }
      if (data.hasOwnProperty('migrate_to_plan')) {
        obj['migrate_to_plan'] = ApiClient.convertToType(data['migrate_to_plan'], 'String');
      }
      if (data.hasOwnProperty('min_cycles')) {
        obj['min_cycles'] = ApiClient.convertToType(data['min_cycles'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('published')) {
        obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
      }
      if (data.hasOwnProperty('reactivation_fee')) {
        obj['reactivation_fee'] = ApiClient.convertToType(data['reactivation_fee'], 'Number');
      }
      if (data.hasOwnProperty('reactivation_sku')) {
        obj['reactivation_sku'] = ApiClient.convertToType(data['reactivation_sku'], 'String');
      }
      if (data.hasOwnProperty('recurring_fee')) {
        obj['recurring_fee'] = ApiClient.convertToType(data['recurring_fee'], 'Number');
      }
      if (data.hasOwnProperty('recurring_sku')) {
        obj['recurring_sku'] = ApiClient.convertToType(data['recurring_sku'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
      }
    }
    return obj;
  }

  exports.registerChild = function(child, discriminatorValue) {
	  child.discriminatorField = exports.discriminatorField;
	  child.discriminatorValue = discriminatorValue;
	  child.parent = exports;
	  if(exports.children == null)
		  exports.children = {};
	  exports.children[discriminatorValue] = child;
	  if(exports.parent != null)
		  exports.parent.registerChild(child, discriminatorValue);
  }
  
  var discriminatorValue = 'SubscriptionPlanResource';


  /**
   * A map of additional properties, keyed on the property name.  Must match the names and types defined in the template for this subscription
   * @member {Object.<String, module:model/Property>} additional_properties
   */
  exports.prototype['additional_properties'] = undefined;
  /**
   * The length of the billing cycle in number of billing cycle unit
   * @member {Number} billing_cycle_length
   */
  exports.prototype['billing_cycle_length'] = undefined;
  /**
   * The time period unit to apply to the length of billing cycles
   * @member {module:model/SubscriptionPlanResource.BillingCycleUnitEnum} billing_cycle_unit
   */
  exports.prototype['billing_cycle_unit'] = undefined;
  /**
   * Whether this plan will be renewed on the consolidated billing cycle
   * @member {Boolean} consolidated
   */
  exports.prototype['consolidated'] = undefined;
  /**
   * The ISO3 currency code to use for the fees
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * Used to schedule plan availability end date
   * @member {Number} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * Optional override for the length of the first billing cycle before the first recurring billing
   * @member {Number} first_billing_cycle_length
   */
  exports.prototype['first_billing_cycle_length'] = undefined;
  /**
   * The time period unit to apply to the length of the first billing cycle. Required when first_billing_cycle_length is specified
   * @member {module:model/SubscriptionPlanResource.FirstBillingCycleUnitEnum} first_billing_cycle_unit
   */
  exports.prototype['first_billing_cycle_unit'] = undefined;
  /**
   * The number of late payment days before a subscription is canceled
   * @member {Number} grace_period
   */
  exports.prototype['grace_period'] = undefined;
  /**
   * The id of the plan used to generate the SKUs
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The fee charged when the subscription is purchased
   * @member {Number} initial_fee
   */
  exports.prototype['initial_fee'] = undefined;
  /**
   * The SKU to be used when purchasing the subscription through the cart
   * @member {String} initial_sku
   */
  exports.prototype['initial_sku'] = undefined;
  /**
   * The fee to add to the bill when an invoice has gone unpaid passed the grace period
   * @member {Number} late_payment_fee
   */
  exports.prototype['late_payment_fee'] = undefined;
  /**
   * The SKU that will show on the invoice when the subscription is delinquent
   * @member {String} late_payment_sku
   */
  exports.prototype['late_payment_sku'] = undefined;
  /**
   * Whether this plan is locked because it has been purchased by at least one user.  When locked, a number of properties can no longer be changed
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * The number of charge attempts before the subscription becomes delinquent
   * @member {Number} max_bill_attempts
   */
  exports.prototype['max_bill_attempts'] = undefined;
  /**
   * Maximum number of renewals. If a migration plan is provided, the subscription will automatically switch to it when this limit is reached
   * @member {Number} max_cycles
   */
  exports.prototype['max_cycles'] = undefined;
  /**
   * Automatically migrate to the specified plan when the subscription is first renewed
   * @member {String} migrate_to_plan
   */
  exports.prototype['migrate_to_plan'] = undefined;
  /**
   * The minimum number of renewals to charge for
   * @member {Number} min_cycles
   */
  exports.prototype['min_cycles'] = undefined;
  /**
   * The name of the plan used to generate the SKUs
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Whether this plan is currently available
   * @member {Boolean} published
   */
  exports.prototype['published'] = undefined;
  /**
   * The fee to charge when a suspended subscription is to be re-activated
   * @member {Number} reactivation_fee
   */
  exports.prototype['reactivation_fee'] = undefined;
  /**
   * The SKU that will show on the invoice when the subscription is re-activated after a suspension
   * @member {String} reactivation_sku
   */
  exports.prototype['reactivation_sku'] = undefined;
  /**
   * The recurring fee to charge for each renewal
   * @member {Number} recurring_fee
   */
  exports.prototype['recurring_fee'] = undefined;
  /**
   * The SKU that will show on the invoice when the subscription is activated
   * @member {String} recurring_sku
   */
  exports.prototype['recurring_sku'] = undefined;
  /**
   * Used to schedule plan availability start date
   * @member {Number} start_date
   */
  exports.prototype['start_date'] = undefined;


  /**
   * Allowed values for the <code>billing_cycle_unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.BillingCycleUnitEnum = {
    /**
     * value: "millisecond"
     * @const
     */
    "millisecond": "millisecond",
    /**
     * value: "second"
     * @const
     */
    "second": "second",
    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "week"
     * @const
     */
    "week": "week",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "year"
     * @const
     */
    "year": "year"  };

  /**
   * Allowed values for the <code>first_billing_cycle_unit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.FirstBillingCycleUnitEnum = {
    /**
     * value: "millisecond"
     * @const
     */
    "millisecond": "millisecond",
    /**
     * value: "second"
     * @const
     */
    "second": "second",
    /**
     * value: "minute"
     * @const
     */
    "minute": "minute",
    /**
     * value: "hour"
     * @const
     */
    "hour": "hour",
    /**
     * value: "day"
     * @const
     */
    "day": "day",
    /**
     * value: "week"
     * @const
     */
    "week": "week",
    /**
     * value: "month"
     * @const
     */
    "month": "month",
    /**
     * value: "year"
     * @const
     */
    "year": "year"  };


  return exports;
}));


