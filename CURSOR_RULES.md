# Cursor Guardrails - ABI Repository

## 🛡️ Repository Purpose
This is a **data-only package** that provides canonical ABI definitions and network addresses for Vaultum smart contracts. **No application code should be added**.

## 📋 Modification Rules

### ✅ ALLOWED MODIFICATIONS
- **ABI Updates**: Replace ABI JSON files from new contract builds
- **Address Updates**: Add new network deployments to `src/addresses/`
- **Version Bumps**: Update `package.json` version to match contract releases
- **Documentation**: Update README.md with new features/networks
- **Build Config**: Modify `tsconfig.json` or build scripts if needed

### ❌ FORBIDDEN MODIFICATIONS
- **No Application Code**: Do not add business logic, utilities, or helper functions
- **No Dependencies**: Do not add runtime dependencies (devDependencies for build tools only)
- **No Local References**: Do not add `file:` dependencies to other local packages
- **No Private ABIs**: Only include ABIs from publicly audited contracts
- **No Hardcoded Keys**: Never include private keys, even test keys

## 🔒 Security Rules

### **ABI Source Verification**
- ABIs MUST be sourced from `github.com/vaultum/contracts/out` at a tagged release
- Never copy ABIs from unverified sources or development builds
- Each ABI update requires corresponding contracts repository tag

### **Address Verification** 
- All addresses MUST be verified on Etherscan/Sourcify before inclusion
- Include verification links in commit messages
- Test addresses on testnets before including mainnet addresses

### **Version Alignment**
- Package version MUST align with source contracts release
- Use semantic versioning: `MAJOR.MINOR.PATCH`
- Tag releases with `v` prefix (e.g., `v0.2.0`)

## 📁 File Structure Rules

### **Required Files**
```
src/
├── abis/              # Contract ABI JSON files only
├── addresses/         # Network address mappings only  
└── index.ts           # Export definitions only
```

### **Forbidden Files**
- No `src/lib/`, `src/utils/`, or `src/helpers/` directories
- No test files (this is a data package)
- No example applications or demos
- No environment-specific configurations

## 🚀 Build & Release Rules

### **Build Requirements**
- Must generate TypeScript declarations (`dist/index.d.ts`)
- Must support both ESM and CommonJS formats
- Must include source files in published package

### **Release Process**
1. Verify all ABIs are from tagged contracts release
2. Verify all addresses are deployed and verified on-chain
3. Update version in `package.json`
4. Tag release with `git tag vX.Y.Z`
5. CI will validate and publish automatically

## 🔍 Quality Gates

### **CI Validation**
- ABIs presence check (all required contracts)
- Address validity check (proper format, non-zero)
- TypeScript build success
- Export surface validation
- Version tag alignment

### **Manual Verification** 
- Before release, manually verify 2-3 addresses on block explorer
- Confirm ABI matches deployed bytecode interface
- Test import in separate project

## 📝 Commit Guidelines

### **Commit Messages**
```bash
# Good
feat: add mainnet deployment addresses v2.1.0
fix: update SmartAccount ABI with new events
docs: update README with new network support

# Bad
feat: add helper utility functions
fix: quick address update
chore: misc changes
```

### **Required Information**
- Source contracts tag/commit
- Verification links for new addresses
- Network name and chain ID for new deployments

## 🚫 Never Do This

- ❌ Add business logic or utility functions
- ❌ Include unverified or test addresses in production networks
- ❌ Copy ABIs from other projects or modified sources
- ❌ Add dependencies beyond build tools
- ❌ Commit without corresponding contracts release
- ❌ Mix different contract versions in same package release

## ✅ Best Practices

- ✅ Keep package pure and focused (data only)
- ✅ Maintain clear versioning aligned with contracts
- ✅ Include comprehensive verification links
- ✅ Test imports in consumer applications
- ✅ Keep README updated with supported networks
- ✅ Use consistent JSON formatting for ABIs

---

**This package is the foundation for all Vaultum integrations. Maintain highest standards for accuracy and verification.**
