# Document Registry Troubleshooting Guide

This section covers common errors and issues specific to the Document Registry functionality.

## Common Document Registry Errors

### Invalid Reference Link
**Description:** The provided document reference link is inaccessible or invalid.  
**Error Message:** `Entered IPFS/arweave/web link reference is not available`  
**Reasons:**
- The reference link does not exist
- The link is not reachable (connection issues)
- Web links: Storage provider does not support CORS
- IPFS links: The CID does not exist for IPFS-deployed documents
- Arweave links: The TX-ID does not exist or the document is not minted yet

**Solution:**
1. **Verify link accessibility:** Test the link in a browser or network tool
2. **IPFS documents:** Confirm the CID exists and is pinned to the network
3. **Arweave documents:** Verify the TX-ID exists and the document is fully minted
4. **Web links:** Ensure the storage provider supports CORS
5. **Check network access:** Confirm your connection can reach the storage network
6. **Re-upload if necessary:** Upload the document to a reliable storage provider

**Prevention:**
- Test all storage links before registration
- Use decentralized storage with high availability (IPFS/Arweave)
- For web links, verify CORS support with the provider
- Confirm deployment completion before registration

---

### Document Loading Failed
**Description:** Unable to load or verify a registered document.  
**Error Message:** `Document loading failed: no registered document or wrong document did`  
**Causes:**
1. **Resource errors:** Link decryption, proof claims, or data resolution failures
2. **Broken user data:** Users editing or removing information from their registered document DID
3. **Changed files:** Users modifying the original file after registration (common with web links)
4. **Missing key information:** Critical data removed from the document DID

**Solution:**
1. **Verify DID completeness:** Check that the document DID contains all required fields
2. **Check file integrity:** Ensure the original file hasn't been modified
3. **Re-register if needed:** If the file was changed, register a new document
4. **Contact issuer:** For third-party documents, request a re-issue
5. **For web links:** Verify the linked file matches the originally registered version

**Prevention:**
- Never modify files after registration
- Store immutable copies on IPFS or Arweave
- Keep backup of original document DIDs
- Use version control for document updates

---

### Document Status Change Permissions
**Description:** Unauthorized attempt to change document status.  
**Error Messages:** `Only issuer can revoke/validate/suspend document`  
**Reason:** Only the original issuer of a document has permission to change its status (revoke, validate, or suspend). These are three separate but related permission errors.

**Solution:**
1. **Identify the issuer:** Determine who originally issued the document
2. **Contact issuer:** Request the status change from the authorized party
3. **Provide justification:** Explain why the status change is needed
4. **Wait for action:** Allow the issuer to perform the status change
5. **For self-issued documents:** Ensure you're using the correct issuer account/wallet

**Prevention:**
- Document issuer relationships clearly
- Establish status change protocols with issuers
- Maintain contact information for document issuers
- Consider multi-signature setups for important documents

---

### Unsupported Reference DID Method
**Description:** Document reference deciphering process fails.  
**Error Message:** `unsupported reference DID method`  
**Reason:** The cipher key in the document DID has been altered by users, breaking the deciphering process and preventing correct plain data resolution.

**Solution:**
1. **Do not modify DIDs:** Document DIDs should never be manually edited
2. **Use original DID:** Retrieve the original, unmodified document DID
3. **Re-register:** If the DID was altered, register a new document
4. **Check generation tools:** Ensure DID generation tools are functioning correctly
5. **Contact support:** If the error appears without user modification

**Prevention:**
- Never manually edit or alter document DIDs
- Use official DID generation tools
- Store DIDs in secure, unmodifiable formats
- Implement checksums for DID validation

---

### Invalid DID Delegate
**Description:** Actor lacks proper delegation permissions.  
**Error Message:** `Invalid DID delegate`  
**Reasons:**
1. Actor key is not an active delegate of the entered Ethereum DID (ERC1056)
2. Actor is an active delegate but not an `assertionMethod` delegate for that DID

**Solution:**
1. **Verify delegation status:** Check if your key is properly delegated
2. **Check delegate type:** Ensure you're an `assertionMethod` delegate
3. **Request proper delegation:** Contact the DID controller for correct delegation
4. **Use correct key:** Switch to a properly delegated key if available
5. **Update delegation:** If permissions changed, request updated delegation

**Prevention:**
- Maintain proper delegation records
- Regularly verify delegate status
- Document delegation hierarchies
- Use delegation management tools

---

### Unmatched Reference Hash
**Description:** Document file verification fails due to content changes.  
**Error Message:** `Unmatched reference hash`  
**Reason:** The user has changed the original file after registration, causing hash verification to fail. This is particularly common with web link resources where users can modify the linked file.

**Solution:**
1. **Restore original file:** Revert to the exact file used during registration
2. **Check file integrity:** Compare current file hash with registered hash
3. **For web links:** Ensure the linked file hasn't been updated or replaced
4. **Re-register:** If the file must be changed, register a new document
5. **Use immutable storage:** Switch to IPFS or Arweave to prevent modifications

**Prevention:**
- Use immutable storage (IPFS/Arweave) for important documents
- Implement version control instead of file replacement
- Document file hashes at registration time
- Use checksums for file integrity verification

---

## Document Lifecycle Statuses

```
Created → Registered → [Validated/Suspended/Revoked] → Archived
```

**Valid Status Changes:**
- **Issuer only:** Revoke, Validate, Suspend
- **Owner/Delegate:** Update metadata (with proper permissions)
- **Anyone:** Verify (read-only)

---

## Quick Resolution Guide

| Error | Likely Cause | Immediate Action | Long-term Prevention |
|-------|-------------|------------------|----------------------|
| Invalid Reference Link | Broken link, CORS issue | Test link, check storage | Use decentralized storage |
| Document Loading Failed | Modified file/DID | Verify original files | Immutable storage |
| Status Change Denied | Wrong actor | Contact issuer | Document issuer roles |
| Unsupported DID Method | Modified DID | Use original DID | Never edit DIDs |
| Invalid DID Delegate | Missing permissions | Request delegation | Maintain delegation records |
| Unmatched Hash | File changed | Restore original | Hash verification systems |

---

## Best Practices for Document Management

### Storage Recommendations
1. **For critical documents:** Use IPFS or Arweave (immutable)
2. **For frequently updated documents:** Implement versioning systems
3. **Avoid:** Modifiable web links for important documents
4. **Always:** Store original file hashes and DIDs securely

### DID Management
1. **Never** manually edit DIDs
2. **Always** use official generation tools
3. **Store** DIDs in multiple secure locations
4. **Verify** DIDs before sharing or using

### Permission Management
1. **Document** all issuer-delegate relationships
2. **Regularly** audit delegation status
3. **Use** proper DID methods for your use case
4. **Implement** multi-signature for important documents

---

## Support Information
When contacting support about document registry issues, provide:
1. Complete document DID
2. Original registration transaction hash
3. Error message screenshot
4. Storage link used
5. Steps to reproduce the issue
6. Any modifications made since registration