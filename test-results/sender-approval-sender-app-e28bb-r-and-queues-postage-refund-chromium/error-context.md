# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: sender-approval.spec.ts >> sender approval >> blocks an unknown sender and queues postage refund
- Location: tests\e2e\sender-approval.spec.ts:33:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: /Unknown Sender.*Message request awaiting approval/ })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic: "Demo Mode: Showing placeholder data."
  - generic [ref=e3]:
    - complementary [ref=e6]:
      - generic [ref=e7]:
        - img [ref=e9]
        - generic [ref=e12]:
          - generic [ref=e13]: STEALTH
          - generic [ref=e14]: mail protocol
        - button "Toggle sidebar" [ref=e15]:
          - img [ref=e16]
      - button "Compose Ctrl+N" [ref=e19]:
        - img [ref=e20]
        - generic [ref=e23]: Compose
        - generic [ref=e24]: Ctrl+N
      - navigation [ref=e25]:
        - list [ref=e27]:
          - listitem [ref=e28]:
            - button "All Mail 16" [ref=e29]:
              - img [ref=e30]
              - generic [ref=e33]: All Mail
              - generic [ref=e34]: "16"
          - listitem [ref=e35]:
            - button "Inbox 9" [ref=e36]:
              - img [ref=e37]
              - generic [ref=e40]: Inbox
              - generic [ref=e41]: "9"
          - listitem [ref=e42]:
            - button "Priority 1" [ref=e43]:
              - img [ref=e44]
              - generic [ref=e47]: Priority
              - generic [ref=e48]: "1"
          - listitem [ref=e49]:
            - button "Snoozed 1" [ref=e50]:
              - img [ref=e51]
              - generic [ref=e54]: Snoozed
              - generic [ref=e55]: "1"
          - listitem [ref=e56]:
            - button "Starred 3" [ref=e57]:
              - img [ref=e58]
              - generic [ref=e60]: Starred
              - generic [ref=e61]: "3"
          - listitem [ref=e62]:
            - button "Drafts 1" [ref=e63]:
              - img [ref=e64]
              - generic [ref=e67]: Drafts
              - generic [ref=e68]: "1"
          - listitem [ref=e69]:
            - button "Sent 1" [ref=e70]:
              - img [ref=e71]
              - generic [ref=e74]: Sent
              - generic [ref=e75]: "1"
        - generic [ref=e76]:
          - generic [ref=e77]: Protocol
          - list [ref=e78]:
            - listitem [ref=e79]:
              - button "Verified 1" [ref=e80]:
                - img [ref=e81]
                - generic [ref=e84]: Verified
                - generic [ref=e85]: "1"
            - listitem [ref=e86]:
              - button "Pending Proof 1" [ref=e87]:
                - img [ref=e88]
                - generic [ref=e91]: Pending Proof
                - generic [ref=e92]: "1"
            - listitem [ref=e93]:
              - button "Requests 3" [active] [ref=e94]:
                - img [ref=e96]
                - generic [ref=e101]: Requests
                - generic [ref=e102]: "3"
            - listitem [ref=e103]:
              - button "Encrypted 1" [ref=e104]:
                - img [ref=e105]
                - generic [ref=e108]: Encrypted
                - generic [ref=e109]: "1"
        - generic [ref=e110]:
          - generic [ref=e111]: Delivery
          - list [ref=e112]:
            - listitem [ref=e113]:
              - button "Receipts 1" [ref=e114]:
                - img [ref=e115]
                - generic [ref=e117]: Receipts
                - generic [ref=e118]: "1"
            - listitem [ref=e119]:
              - button "Outbox 1" [ref=e120]:
                - img [ref=e121]
                - generic [ref=e123]: Outbox
                - generic [ref=e124]: "1"
            - listitem [ref=e125]:
              - button "Scheduled 1" [ref=e126]:
                - img [ref=e127]
                - generic [ref=e131]: Scheduled
                - generic [ref=e132]: "1"
        - generic [ref=e133]:
          - generic [ref=e134]: Storage
          - list [ref=e135]:
            - listitem [ref=e136]:
              - button "Archive 1" [ref=e137]:
                - img [ref=e138]
                - generic [ref=e141]: Archive
                - generic [ref=e142]: "1"
            - listitem [ref=e143]:
              - button "Spam 1" [ref=e144]:
                - img [ref=e145]
                - generic [ref=e147]: Spam
                - generic [ref=e148]: "1"
            - listitem [ref=e149]:
              - button "Trash 1" [ref=e150]:
                - img [ref=e151]
                - generic [ref=e154]: Trash
                - generic [ref=e155]: "1"
        - generic [ref=e156]:
          - generic [ref=e157]: Folders
          - button [ref=e158]:
            - img [ref=e159]
        - list [ref=e160]:
          - listitem [ref=e161]:
            - button "Clients" [ref=e162]:
              - img [ref=e163]
              - generic [ref=e166]: Clients
          - listitem [ref=e167]:
            - button "Investors" [ref=e168]:
              - img [ref=e169]
              - generic [ref=e172]: Investors
          - listitem [ref=e173]:
            - button "Personal" [ref=e174]:
              - img [ref=e175]
              - generic [ref=e178]: Personal
      - generic [ref=e179]:
        - generic [ref=e181]: EN
        - generic [ref=e182]:
          - generic [ref=e183]: Uthaimin
          - generic [ref=e184]: kryputh@stealth.me
    - separator [ref=e186]:
      - img [ref=e188]
    - generic [ref=e197]:
      - banner [ref=e198]:
        - generic [ref=e199]:
          - img
          - textbox "Search messages, people, proofs, attachments..." [ref=e200]
          - button "K" [ref=e201]:
            - img [ref=e202]
            - text: K
        - generic [ref=e204]:
          - button "Proofs" [ref=e205]:
            - img [ref=e206]
            - generic [ref=e209]: "2"
          - button "Later" [ref=e210]:
            - img [ref=e211]
            - generic [ref=e214]: "5"
          - button "Files" [ref=e215]:
            - img [ref=e216]
            - generic [ref=e218]: "9"
        - generic [ref=e219]:
          - button "Filter" [ref=e221]:
            - img [ref=e222]
          - button "Notifications" [ref=e225]:
            - img [ref=e227]
          - button "Import contacts" [ref=e231]:
            - img [ref=e232]
          - button "Help" [ref=e236]:
            - img [ref=e237]
            - generic [ref=e240]: "?"
          - button "Proof Inspector" [ref=e241]:
            - img [ref=e242]
            - generic [ref=e245]: I
          - button "Settings" [ref=e246]:
            - img [ref=e247]
            - generic [ref=e250]: ","
          - button "Personal" [ref=e253]:
            - generic [ref=e255]: Personal
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]:
            - generic [ref=e260]:
              - img [ref=e261]
              - heading "Request Triage Board" [level=2] [ref=e266]
              - generic [ref=e267]: 3 pending
            - paragraph [ref=e268]: Approve, block, or refund postage for unknown and paid senders from a unified interface.
          - generic [ref=e270] [cursor=pointer]:
            - checkbox "Simulate network failure" [ref=e271]
            - text: Simulate network failure
        - generic [ref=e273]:
          - generic [ref=e276]:
            - generic [ref=e277]:
              - generic [ref=e278]:
                - img "Unknown Sender" [ref=e280]
                - generic [ref=e281]:
                  - generic [ref=e282]:
                    - heading "Unknown Sender" [level=3] [ref=e283]
                    - generic [ref=e284]:
                      - img [ref=e285]
                      - text: Unknown
                  - paragraph [ref=e287]: GCKN...N4XQ
              - generic [ref=e288]:
                - paragraph [ref=e289]: Postage Paid
                - paragraph [ref=e290]: 1.0 XLM
            - generic [ref=e291]:
              - generic [ref=e292]: Message request awaiting approval
              - paragraph [ref=e293]: This sender paid postage but is not in your trusted contacts yet...
            - generic [ref=e294]:
              - button "Inspect Context" [ref=e295]:
                - img [ref=e296]
                - text: Inspect Context
              - generic [ref=e299]:
                - button "Block" [ref=e300]
                - button "Refund" [ref=e301]
                - button "Approve" [ref=e302]
          - generic [ref=e305]:
            - generic [ref=e306]:
              - generic [ref=e307]:
                - img "Stellar Fund" [ref=e309]
                - generic [ref=e311]:
                  - generic [ref=e312]:
                    - heading "Stellar Fund" [level=3] [ref=e313]
                    - generic [ref=e314]:
                      - img [ref=e315]
                      - text: Verified
                  - paragraph [ref=e318]: GD7K...J4W2
              - generic [ref=e319]:
                - paragraph [ref=e320]: Postage Paid
                - paragraph [ref=e321]: 5.0 XLM
            - generic [ref=e322]:
              - generic [ref=e323]: Grant application review
              - paragraph [ref=e324]: We've completed the initial screening of your GrantFox application...
            - generic [ref=e325]:
              - button "Inspect Context" [ref=e326]:
                - img [ref=e327]
                - text: Inspect Context
              - generic [ref=e330]:
                - button "Block" [ref=e331]
                - button "Refund" [ref=e332]
                - button "Approve" [ref=e333]
          - generic [ref=e336]:
            - generic [ref=e337]:
              - generic [ref=e338]:
                - img "Anonymous Trader" [ref=e340]
                - generic [ref=e342]:
                  - generic [ref=e343]:
                    - heading "Anonymous Trader" [level=3] [ref=e344]
                    - generic [ref=e345]:
                      - img [ref=e346]
                      - text: Unknown
                  - paragraph [ref=e348]: GB3S...P9A2
              - generic [ref=e349]:
                - paragraph [ref=e350]: Postage Paid
                - paragraph [ref=e351]: 1.5 XLM
            - generic [ref=e352]:
              - generic [ref=e353]: OTC offer for STEALTH tokens
              - paragraph [ref=e354]: I'm looking to buy 50k STEALTH tokens at $0.15...
            - generic [ref=e355]:
              - button "Inspect Context" [ref=e356]:
                - img [ref=e357]
                - text: Inspect Context
              - generic [ref=e360]:
                - button "Block" [ref=e361]
                - button "Refund" [ref=e362]
                - button "Approve" [ref=e363]
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures";
  2  | 
  3  | test.describe("sender approval", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.addInitScript(() => {
  6  |       localStorage.setItem("stealth-preferences", JSON.stringify({ onboardingCompleted: true }));
  7  |     });
  8  |     await page.goto("/");
  9  |   });
  10 | 
  11 |   async function openUnknownSenderRequest(page: Parameters<typeof test>[1]) {
  12 |     await page.getByRole("button", { name: /^Requests\b/ }).click();
  13 |     await page
  14 |       .getByRole("button", {
  15 |         name: /Unknown Sender.*Message request awaiting approval/,
  16 |       })
> 17 |       .click();
     |        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |   }
  19 | 
  20 |   test("approves an unknown sender from the requests folder", async ({ page }) => {
  21 |     await openUnknownSenderRequest(page);
  22 | 
  23 |     // The SenderRequest widget should be visible
  24 |     await expect(page.getByText("Decide who can mail you")).toBeVisible();
  25 | 
  26 |     // Approve the sender
  27 |     await page.getByRole("button", { name: "Allow sender" }).click();
  28 | 
  29 |     // Toast confirms approval
  30 |     await expect(page.getByText(/can now mail you/i)).toBeVisible();
  31 |   });
  32 | 
  33 |   test("blocks an unknown sender and queues postage refund", async ({ page }) => {
  34 |     await openUnknownSenderRequest(page);
  35 | 
  36 |     await expect(page.getByText("Decide who can mail you")).toBeVisible();
  37 | 
  38 |     await page.getByRole("button", { name: "Block and refund" }).click();
  39 | 
  40 |     await expect(page.getByText(/blocked and postage marked for refund/i)).toBeVisible();
  41 |   });
  42 | });
  43 | 
```