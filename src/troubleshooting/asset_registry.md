# Asset Registry Troubleshooting Guide

This section covers common errors and issues specific to the Asset Registry functionality.

## Common Asset Registry Errors

### Insufficient Pulse Balance
**Description:** Account lacks the required ELYPS token balance for asset registration.  
**Error Message:** `actor account is not an ELYPS holder (at least 1ELYPS required to register an asset)`  
**Reason:** The actor's account does not hold the minimum required 1 ELYPS token in their Pulse balance.  

**Solution:**
1. Check your current ELYPS token balance
2. Acquire at least 1 ELYPS token before attempting asset registration
3. Ensure the tokens are in the correct wallet/account

**Prevention:**
- Verify your ELYPS balance before initiating asset registration
- Maintain a minimum balance to cover multiple registrations

---

### Invalid Reference Link
**Description:** The provided asset reference link is inaccessible or invalid.  
**Error Message:** `Entered IPFS/arweave/web link reference is not available`  
**Reasons:**
- The reference link does not exist
- The link is not reachable (connection issues)
- Web links: Storage provider does not support CORS
- IPFS links: The CID does not exist for IPFS-deployed assets
- Arweave links: The TX-ID does not exist or the asset is not minted yet

**Solution:**
1. **Verify link accessibility:** Test the link in a browser
2. **IPFS assets:** Confirm the CID exists and is pinned
3. **Arweave assets:** Verify the TX-ID exists and the asset is minted
4. **Web links:** Ensure CORS is enabled on the storage provider
5. **Check network connectivity:** Ensure your connection can reach the storage network

**Prevention:**
- Test all links before submission
- Use reliable storage providers with CORS support
- Confirm deployment before registration

---

### Asset Not Found
**Description:** Attempting to access a non-existent or unregistered asset.  
**Error Message:** `no registered asset or wrong asset did`  
**Reasons:**
- Asset does not exist
- Asset is not registered in the system
- Asset was reported and removed from the database
- Incorrect asset DID (Decentralized Identifier) provided

**Solution:**
1. Verify the asset DID is correct
2. Check if the asset was previously registered
3. Contact support if the asset was reported and needs review
4. Attempt to search for the asset using alternative identifiers

**Prevention:**
- Copy asset DIDs accurately
- Keep records of registered asset DIDs
- Monitor asset status regularly

---

### Asset Frozen - General
**Description:** Asset operations are blocked due to frozen status.  
**Error Message:** `'Asset frozen already'`  
**Reason:** The asset has been frozen by its owner and cannot undergo certain operations.

**Solution:**
1. **For asset owners:** Unfreeze the asset through the owner control panel
2. **For other users:** Contact the asset owner to request unfreezing
3. Wait for the asset owner to change the asset status

**Prevention:**
- Asset owners: Document freezing/unfreezing procedures
- Users: Check asset status before attempting operations

---

### Asset Frozen - Withdrawal Restriction
**Description:** Cannot withdraw funds from a frozen asset.  
**Error Message:** `'Asset frozen already' on withdraw`  
**Reason:** Frozen assets have restricted financial operations, including fund withdrawals.

**Solution:**
1. **Asset owner must:** Unfreeze the asset through owner controls
2. **After unfreezing:** Proceed with withdrawal as normal
3. Do not attempt withdrawal until asset status changes to unfrozen

**Prevention:**
- Complete all withdrawals before freezing assets
- Maintain clear asset status documentation
- Plan financial operations around asset status changes

---

### Insufficient Allowance for Purchase
**Description:** Stablecoin purchase approval is insufficient for asset purchase.  
**Error Message:** `'Not enough allowance, increase allowance for purchase'`  
**Reason:** Asset purchases using stablecoins require pre-approval (allowance) from the buyer. The current allowance is insufficient for the purchase amount.

**Solution:**
1. **Check current allowance:** View your approved stablecoin amount
2. **Increase allowance:** Approve a higher amount through your wallet
   - Connect your wallet
   - Navigate to token approvals
   - Increase allowance for the stablecoin used in purchases
3. **Retry purchase:** After allowance update, attempt purchase again

**Prevention:**
- Set higher allowances for frequent purchases
- Check allowance before initiating purchases
- Use wallet features to manage token approvals efficiently

---

## Quick Reference Table

| Error | Who Can Fix | Action Required |
|-------|-------------|-----------------|
| Insufficient Pulse Balance | Account Owner | Acquire 1+ ELYPS tokens |
| Invalid Reference Link | Asset Submitter | Fix/verify storage link |
| Asset Not Found | System/Support | Verify DID or contact support |
| Asset Frozen (General) | Asset Owner | Unfreeze asset |
| Asset Frozen (Withdrawal) | Asset Owner | Unfreeze then withdraw |
| Insufficient Allowance | Buyer | Increase stablecoin allowance |

## Support Contact
If issues persist after following these steps, contact support with:
- Error message
- Asset DID (if applicable)
- Transaction hash
- Steps already attempted