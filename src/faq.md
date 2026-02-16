# **FAQ**



## **General Platform Questions**

**1. What is SafePulse?**
SafePulse is a **trustless, non-custodial smart contract ecosystem** that enables automated, verifiable agreements on blockchain networks. It allows individuals and businesses to manage payments, coordinate work, and verify data **without surrendering control of their assets or private information**.

**2. How is SafePulse different from traditional escrow platforms?**
Unlike traditional escrow services, SafePulse removes intermediaries entirely.

Funds are **locked inside smart contracts**, not held by a company or kept in a user’s wallet. Execution is automatic and condition-based. No human approval, no centralized custody, and no discretionary control over funds.

**3. How is SafePulse different from marketplaces like Upwork or Fiverr?**
SafePulse is **not a marketplace**. It’s a **protocol-first ecosystem** of smart contracts and tools that enable secure, peer-to-peer agreements, payments, and verification. Users interact **directly on-chain**, without relying on centralized platforms.

**4. Is SafePulse a marketplace?**
No. SafePulse is a **multi-purpose ecosystem of smart contracts, protocols, and tools** for secure interactions on EVM-compatible blockchains. It enables agreements, payments, and verifications, but does **not match buyers and sellers like a marketplace**.

**5. Who is SafePulse built for?**
SafePulse serves **anyone who needs secure, automated, and verifiable digital agreements**, including freelancers, creators, small and medium businesses, and enterprises.

**6. Is SafePulse open source?**
No. All SafePulse components—including the dApp, wallet, smart contracts, algorithms, and protocols—are **closed-source, patent-pending, and protected by copyright**.

**7. What blockchain(s) does SafePulse operate on?**
Currently, SafePulse runs on **Polygon** and **Arbitrum**. In the future, we plan to support **Ethereum mainnet** and additional Layer-2 networks to expand access and liquidity.

**8. What tokens or stablecoins are supported?**
SafePulse supports major stablecoins and tokens commonly used in business: **USDT, USDC, DAI, FRAX, WETH, WBTC, MAI, TUSD, LUSD, SUSD, PYUSD, USDE, FDUSD**, as well as the **native tokens of each supported network**.

**9. Does SafePulse issue its own token?**
Yes, SafePulse currently has **two non-financial tokens**:

* **ELYPS** – an access credential token
* **PULSE** – an execution asset
  No financial token is planned for launch.

**10. Is SafePulse decentralized or partially centralized?**
Yes. SafePulse is decentralized and non-custodial.

Smart contracts execute fully on-chain.

SafePulse includes a **metadata server**, but it:

* Does not store user funds
* Does not store private keys
* Does not store personal data
* Is used only for non-user operational permission handling and storing encrypted references

All agreement logic and value transfers remain on-chain.


---

## **Custody & Security**

**11. Does SafePulse ever hold my funds?**
No. SafePulse is **non-custodial**. Funds never leave the user’s wallet unless conditions of the agreement are cryptographically verified.

**12. Who controls the smart contracts?**
Contracts are executed automatically by **code on the blockchain**. Users retain control over assets, and SafePulse does not have the ability to override or alter contracts.

**13. Can SafePulse freeze or access my funds?**
No. SafePulse **cannot access, freeze, or manipulate user funds**. Contract logic enforces conditions without intermediary control.

**14. What happens if SafePulse shuts down?**
SafePulse is **decentralized**, so the platform shutting down does not affect deployed contracts. Users remain responsible for their own wallets and private keys.

**15. Are contracts upgradeable?**
Yes. Smart contract code may be upgraded to introduce improvements or fixes.

However:

* Users are **not forced** to upgrade their deployed contracts
* Upgrades are  for deployable contarcts
* Deployed agreement states remain unaffected

Users decide whether to adopt new versions of the contracts.

**16. Has the code been audited?**
Yes. SafePulse has undergone **private audits by humans and AI**. Reports are not publicly available but ensure the integrity and security of the platform.

**17. What happens if there is a smart contract bug?**
SafePulse is not liable for exploits.

If a bug is detected or a new feature is requested:

* Users may report issues directly
* Improvements or fixes may be implemented in upgraded contract versions

Contracts are copyright-protected and not publicly verified, updates and security fixes will be handled internally.

**18. What if I lose access to my wallet?**
SafePulse cannot recover lost private keys, passphrases, or seed phrases. Users are **fully responsible for securely storing and backing up keys**.

**19. How are disputes handled if there is no intermediary?**
SafePulse is **arbiterless by design**. Agreements enforce themselves. If disputes occur, users can present **on-chain proofs or documents in court**.

**20. Can someone hack or override a contract?**
Contracts are executed **autonomously on-chain**, making them **tamper-proof**. Users remain responsible for wallet security.

---

## **Legal & Compliance**

**21. Is SafePulse legally binding?**
Yes. Actions are **recorded on-chain with cryptographic proofs**, which can serve as **admissible evidence in legal proceedings** if required.

**22. Can SafePulse contracts replace traditional legal contracts?**
SafePulse agreements automatically enforce predefined conditions between parties.

If no external legal enforcement is required, agreements function independently through on-chain execution.

However, if users require traditional legal recognition, regulatory approval, or enforcement outside blockchain execution, additional legal agreements may still be necessary.

SafePulse enforces execution — it does not replace every possible legal framework.

**24 & 25. Is SafePulse KYC/AML compliant?**
SafePulse is **protocol-first, non-custodial, and on-chain**, so KYC and AML are **not required**. There is **no central control**, similar to platforms like Uniswap, making it enterprise-friendly while remaining compliant with decentralized protocol standards.

**26. Can businesses use SafePulse while remaining compliant?**
Yes. Businesses can **participate in agreements as parties**, without acting as flow controllers. All transactions are transparent, verifiable, and non-custodial.

**44. What is DID (Decentralized Identifier)?**
A DID is a **unique, URL-like identifier** for sovereign entities in decentralized systems. In SafePulse, DIDs identify contracts, deposits, registries, and accounts, ensuring **secure, auditable, and abuse-resistant interactions**.

---

## **Payments & Transactions**

**29. How do payments work inside a contract?**
Funds are deposited into and locked inside **smart contracts**.
They are released only when contract conditions are met.

**30. What does “progressive execution” mean?**
Progressive execution allows:

* A single payment contract to be funded through multiple deposits
* Agreement documents to include multiple payment contracts
* Different tokens per payment
* Different expiration times per payment

Each payment contract remains separate, allowing flexibility in structuring complex agreements.

**31. Can funds be released in milestones?**
Yes.

Each payment contract can be released independently from other payment contracts.

However:

* A single payment contract cannot be released partially
* It must be executed as a whole
* Multiple payment contracts can exist within one agreement

**32. Can contracts be revoked?**
Yes, if the contract logic allows revocation. **Revocable contracts** can undo or cancel conditions before execution.

**33. What happens if one party disappears?**
Funds may **lock until all parties act**, protecting remaining participants from loss.

**34. Can contracts include deadlines?**
Yes. SafePulse supports **time-bound logic** to enforce deadlines automatically.

**35. What happens when a deadline is missed?**
Agreements can **freeze assets or trigger contract-specific logic** until conditions are resolved.

**36. Are transactions reversible?**
Yes, **escrow and pledge contracts** allow **conditional refunds or rollbacks**, as defined in the contract logic.

**37. What are the platform fees?**
SafePulse reduces overhead by **removing intermediaries**, offering a **cost-efficient, transparent transaction environment**.

**38 & 39. Who pays transaction/gas fees?**
Users pay fees directly via their wallet based on **network conditions and service pricing**.

**40. Can payments be made cross-border without restrictions?**
Yes. SafePulse operates **globally, without mandatory KYC or jurisdictional restrictions**, allowing borderless transactions.

---

## **Identity & Privacy**

**41. Do I need to reveal my identity?**
No. SafePulse is **privacy-first**, and personal identity approval is not required.

**42. Can I stay anonymous?**
Yes. Users may interact **pseudonymously**, using cryptographic proofs rather than personal data.

**43. What is a verifiable credential?**
A verifiable credential is a **proof of authenticity** tied to documents, identity, or agreement actions, stored **on-chain without exposing personal data**.

**45. How does SafePulse verify documents without storing them?**
SafePulse uses cryptographic methods to verify the authenticity of documents without storing the actual files.

Users choose where to store their files — whether decentralized storage or their own infrastructure — while SafePulse verifies integrity and authenticity without holding the data.

**46. Where are files stored?**
Users can store files on **decentralized networks or preferred storage**, remaining fully in control.

**47. Can I use centralized storage?**
Yes. SafePulse supports user choice for storage while still verifying proofs **on-chain**.

**48. Does SafePulse track user data?**
No. Analytics are **anonymous and optional**, containing **no personal data**.

---

## **Disputes & Risk Management**

**49. How are disputes triggered?**
Disputes are minimized by **self-enforcing agreements**, but if they occur, users can present **on-chain proofs in court**.

**50. What does “asset freeze” mean?**
Funds are temporarily **locked in the contract** until all parties fulfill agreement conditions.

**51 & 53. Who resolves disputes and can third-party arbitration be used?**
SafePulse is **arbiterless**. No external or third-party arbitration is supported. Users rely on **contract enforcement or legal presentation of on-chain proof**.

**54 & 55. What prevents bad actors and fraud?**
Contracts are **self-enforcing, tamper-proof, and protocol-first**, reducing opportunity for fraud or abuse.

**56 & 57. What if both parties disagree permanently / Can funds be locked forever?**
Funds **may remain locked** until all parties act. The protocol cannot release funds unilaterally.

---

## **Business & Enterprise Use**

**58. Can enterprises integrate SafePulse via API?**
No public API exists; all interactions are **directly on-chain via dApp or smart contracts**.

**60. Is SafePulse suitable for large transaction volumes?**
Yes. The platform is designed for **high-volume transactions and secure agreement enforcement**.

**61. Can SafePulse integrate with accounting systems?**
No. SafePulse does **not integrate with automation or accounting software**.

**62. Can contracts include multi-signature logic?**
Native multisig is not supported, but **multiparty agreements with multiple tokens and payments** are fully supported.

**64. Is SafePulse suitable for recurring agreements?**
Recurring or milestone-based agreements can be implemented, but contracts themselves are **immutable once deployed**.

**65. Can SafePulse be white-labeled?**
No. All services are **patent-pending and copyright-protected**.

**66. Is there SLA or enterprise support?**
SLA is unnecessary due to **on-chain decentralized execution**, but enterprise support is available through **guidance, deployment assistance, and consulting**.

---

## **Practical Usage Questions**

**67. Do I need coding knowledge?**
No. SafePulse allows **anyone to deploy contracts via dApp with minimal clicks**.

**68. How long does it take to create a contract?**
A few minutes. Contracts are **automated and easy to configure via the dApp**.

**69. Can I edit a contract after deployment?**
No. Agreements are **immutable**, though contract code may be upgraded for features or bug fixes.

**70. Can I template agreements?**
No.

SafePulse is not a legal document signing platform like DocuSign.

To repeat an agreement, users must deploy a new contract with the same data manually.
No pre-made legal templates are provided.

**71. Can I duplicate an existing contract?**
No. Each contract is a **separate deployment**. To replicate, you must **deploy a new contract with the same content**.

**72. Is there a minimum contract value?**
No minimum; any value can be used.

**73. Is there a maximum contract value?**
No. Contracts are **unlimited in value**.

**74. Can SafePulse be used on mobile?**
Yes. Anyone with a **compatible smartphone and wallet** can use the dApp.

**75. What wallets are supported?**
Most injected wallets, including **MetaMask, TrustWallet**, and others, are supported.

---

## **Strategic / Philosophical Questions**

**76. Why is “trustless” better than trusted platforms?**
By removing intermediaries, SafePulse **reduces risks of fraud, censorship, and centralized failure**. Trust is derived from **math, cryptography, and verifiable execution**, not humans or institutions.

**77. How does SafePulse eliminate fraud mathematically?**
All agreements and payments are **executed by smart contracts with cryptographic proofs**, making **tampering, double-spending, or fraud nearly impossible**.

**78. What happens if blockchain regulations change?**
SafePulse is **protocol-first, on-chain, non-custodial, and decentralized**. Changes in external regulations **do not affect on-chain execution**.

**79. How does SafePulse compare to traditional escrow?**
SafePulse provides **automatic enforcement, non-custodial funds, and verifiable agreements**, unlike traditional escrow, which is **manual, centralized, and costly**.

**80. Why now? What makes this viable today?**
Decentralized technology, cryptography, and Layer-2 scaling solutions are now **mature, reliable, and accessible**, enabling **trustless, borderless, and automated agreements**.

**81. What risks still exist?**
Users are responsible for **key management, wallet security, and proper agreement setup**. On-chain execution is secure, but human error or lost keys remain risks.

**82. What problems does SafePulse NOT solve?**
SafePulse **does not handle complex legal disputes, centralized liquidity management, or regulatory enforcement**. It only provides **secure, verifiable on-chain interactions**.

**83. How does SafePulse generate revenue?**
Through **service registry fees, execution fees, access tokens, and on-chain deployment subscriptions**.

**84. Why should I trust the protocol?**
SafePulse is **non-custodial, cryptographically secure, and verifiable on-chain**. Protocol logic enforces agreements independently of the platform.

**85. What is SafePulse’s long-term vision?**
To build a world of **sovereign digital agreements**, enabling **secure, automated, and borderless collaboration** for individuals and businesses globally.
