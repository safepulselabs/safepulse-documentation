# Escrow Troubleshooting Guide

This section covers common errors and issues specific to the Escrow functionality.

## Common Escrow Errors

### Insufficient Balance
**Description:** Account lacks sufficient funds for escrow operations.  
**Error Message:** `'insufficient balance'`  
**Reasons:**
- Actor/depositor/user account does not have enough network native token to cover deposit fees
- Account does not have enough balance to cover the escrow deposit amount

**Solution:**
1. **Check native token balance:** Verify you have enough network native token for gas/deposit fees
2. **Check deposit amount:** Ensure your account has sufficient funds for the full escrow amount
3. **Top up if needed:** Add more native tokens for fees and/or deposit funds to your account
4. **Adjust deposit amount:** Consider reducing the escrow amount if balance is insufficient

**Prevention:**
- Monitor account balances regularly
- Keep reserve funds for transaction fees
- Calculate total required amount (deposit + fees) before initiating

---

### Insufficient Token Allowance
**Description:** Stablecoin transfer permission is insufficient for escrow deposit.  
**Error Message:** `'insufficient token allowance'`  
**Reason:** User is attempting to deposit stablecoin into escrow but hasn't granted the escrow contract permission to transfer the specified amount. The allowance must be set before deposit.

**Solution:**
1. **Connect wallet:** Ensure your wallet is connected to the platform
2. **Approve token transfer:** Navigate to token approvals in your wallet
3. **Set allowance:** Grant the escrow contract permission to transfer the desired stablecoin amount
4. **Retry deposit:** After approval is confirmed, attempt the escrow deposit again
5. **Note:** Some wallets require separate approval and deposit transactions

**Prevention:**
- Set generous allowances for frequent escrow users
- Complete token approvals before initiating deposits
- Use wallet features to manage and track token approvals

---

### Deposit Duration Exceeded
**Description:** Attempting to set an escrow duration beyond allowed limits.  
**Error Message:** `'Deposit duration can not be more than 93 days'`  
**Reason:** The system enforces a maximum escrow duration limit of 93 days for all deposits.

**Solution:**
1. **Review duration:** Check your specified deposit duration
2. **Reduce duration:** Adjust the duration to 93 days or less
3. **Consider alternatives:** For longer-term arrangements, use multiple shorter escrows or explore other options
4. **Retry with corrected duration:** Submit the deposit with the adjusted timeframe

**Prevention:**
- Always verify duration limits before setting escrow terms
- Plan escrow periods within the 93-day limit
- Document longer-term agreements separately

---

### Deposit Transaction Failed
**Description:** Escrow deposit transaction did not process successfully.  
**Error Message:** `'Deposit failed: transaction didnt sent'`  
**Reason:** The transaction was not successfully sent to the network or failed during processing.

**Solution:**
1. **Check network connection:** Ensure stable internet and blockchain network access
2. **Verify wallet status:** Confirm wallet is properly connected and unlocked
3. **Review gas fees:** Ensure sufficient funds for gas/transaction fees
4. **Check for pending transactions:** Clear or cancel any stuck transactions
5. **Retry transaction:** Attempt the deposit again
6. **Contact support if persistent:** If failures continue, provide transaction hash to support

**Prevention:**
- Use reliable internet connections
- Monitor network congestion and gas prices
- Keep wallet software updated

---

### Deposit Not Yet Released
**Description:** Attempting to access funds before release conditions are met.  
**Error Message:** `'Not released yet'`  
**Reasons:**
- Deposit escrow status is not yet released by the payer
- 5-day post-expiration period has not yet passed

**Solution:**
1. **Check deposit status:** Verify current escrow status and conditions
2. **For payees:** Wait for payer to release funds or for expiration + 5 days
3. **For payers:** Release funds if conditions are met
4. **Monitor timeline:** Track expiration date and post-expiration period
5. **After 5 days post-expiration:** Funds become accessible to payee

**Prevention:**
- Set clear release terms upfront
- Monitor escrow timelines
- Communicate with counterparty about release timing

---

### Deposit Frozen Due to Dispute
**Description:** Escrow funds are locked due to a raised dispute.  
**Error Message:** `'Frozen already'`  
**Reason:** Payer has raised a dispute, freezing the deposit. In this state:
- Payer cannot rollback the deposit
- Payee cannot withdraw funds
- Only specific actions are allowed to resolve the dispute

**Resolution Paths:**
1. **Payee can cancel:** Allows payer to rollback funds
2. **Payer can complete:** Allows payee to withdraw funds
3. **Wait for resolution:** If neither action is taken, funds remain frozen

**Solution:**
1. **Identify dispute reason:** Check why dispute was raised
2. **Communicate:** Discuss resolution with counterparty
3. **Choose resolution path:**
   - **If payee agrees to cancel:** Payee cancels → Payer rolls back
   - **If payer agrees to release:** Payer completes → Payee withdraws
4. **Document agreement:** Keep records of dispute resolution

**Prevention:**
- Establish clear terms before escrow
- Maintain open communication
- Document deliverables and expectations

---

### Deposit Already Released
**Description:** Attempting to perform actions on an already-released escrow.  
**Error Message:** `'Released already'`  
**Reason:** The escrow deposit status is already marked as released. No further actions can be performed on released escrows.

**Solution:**
1. **Verify status:** Confirm the escrow is indeed released
2. **Check transaction history:** Look for release transactions
3. **For payees:** Funds should be available for withdrawal if not already withdrawn
4. **For payers:** No further action needed; release is complete
5. **If erroneous:** Contact support with transaction details

**Prevention:**
- Track escrow status changes
- Set up notifications for status updates
- Document all escrow milestones

---

## Escrow Status Flow Reference

```
Deposit Created → Active → [Dispute Raised → Frozen] → Released → Completed
                        ↘ [No Dispute] → Released → Completed
```

## Quick Action Guide

| Error | Role | Immediate Action | Resolution Path |
|-------|------|------------------|-----------------|
| Insufficient Balance | Any | Check balances | Add funds, reduce amount |
| Insufficient Allowance | Depositor | Approve tokens | Set allowance, retry |
| Duration > 93 days | Depositor | Reduce duration | Set ≤93 days, retry |
| Deposit Failed | Depositor | Check connection | Retry, check gas |
| Not Released Yet | Payee | Wait | Payer release or wait 5 days post-expiry |
| Frozen Already | Either | Communicate | Payee cancel OR Payer complete |
| Released Already | Either | Verify status | Withdraw (payee) or close (payer) |

## Dispute Resolution Matrix

| Action | Who Can Do | Result |
|--------|------------|---------|
| Raise Dispute | Payer Only | Freezes funds |
| Cancel Deposit | Payee Only | Allows payer rollback |
| Complete Deposit | Payer Only | Allows payee withdrawal |
| Withdraw Funds | Payee Only | After release/completion |
| Rollback Funds | Payer Only | After payee cancellation |

## Support Information
When contacting support about escrow issues, provide:
- Escrow contract address
- Deposit transaction hash
- Wallet addresses (payer/payee)
- Error screenshots
- Steps already attempted