# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: compose.spec.ts >> compose flow >> schedules message instead of immediate send
- Location: tests\e2e\compose.spec.ts:44:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder(/recipients@/)

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
              - img [ref=e38]
              - generic [ref=e41]: Inbox
              - generic [ref=e42]: "9"
          - listitem [ref=e43]:
            - button "Priority 1" [ref=e44]:
              - img [ref=e45]
              - generic [ref=e48]: Priority
              - generic [ref=e49]: "1"
          - listitem [ref=e50]:
            - button "Snoozed 1" [ref=e51]:
              - img [ref=e52]
              - generic [ref=e55]: Snoozed
              - generic [ref=e56]: "1"
          - listitem [ref=e57]:
            - button "Starred 3" [ref=e58]:
              - img [ref=e59]
              - generic [ref=e61]: Starred
              - generic [ref=e62]: "3"
          - listitem [ref=e63]:
            - button "Drafts 1" [ref=e64]:
              - img [ref=e65]
              - generic [ref=e68]: Drafts
              - generic [ref=e69]: "1"
          - listitem [ref=e70]:
            - button "Sent 1" [ref=e71]:
              - img [ref=e72]
              - generic [ref=e75]: Sent
              - generic [ref=e76]: "1"
        - generic [ref=e77]:
          - generic [ref=e78]: Protocol
          - list [ref=e79]:
            - listitem [ref=e80]:
              - button "Verified 1" [ref=e81]:
                - img [ref=e82]
                - generic [ref=e85]: Verified
                - generic [ref=e86]: "1"
            - listitem [ref=e87]:
              - button "Pending Proof 1" [ref=e88]:
                - img [ref=e89]
                - generic [ref=e92]: Pending Proof
                - generic [ref=e93]: "1"
            - listitem [ref=e94]:
              - button "Requests 3" [ref=e95]:
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
        - generic [ref=e260]:
          - generic [ref=e261]:
            - generic [ref=e262]:
              - heading "Inbox" [level=2] [ref=e263]
              - paragraph [ref=e264]: 9 conversations
            - generic [ref=e265]:
              - button "all" [ref=e266]
              - button "unread" [ref=e267]
              - button "flagged" [ref=e268]
          - listbox [ref=e269]:
            - listitem [ref=e270]:
              - generic [ref=e271]:
                - checkbox "Select all visible messages" [ref=e272]
                - button "Select all" [ref=e273]
                - generic [ref=e274]: 9 conversations
                - generic [ref=e275]: Ctrl/⌘+A · Esc
            - listitem [ref=e276]:
              - generic [ref=e277]:
                - 'checkbox "Select Lina Park: Q2 brand system - final direction" [ref=e278]'
                - button "Lina Park Lina Park Verified 9:42 AM Q2 brand system - final direction" [ref=e279]:
                  - img "Lina Park" [ref=e281]
                  - generic [ref=e283]:
                    - generic [ref=e284]:
                      - generic [ref=e285]:
                        - generic [ref=e286]: Lina Park
                        - generic [ref=e288]:
                          - img [ref=e289]
                          - generic [ref=e292]: Verified
                      - generic [ref=e293]: 9:42 AM
                    - generic [ref=e294]: Q2 brand system - final direction
            - listitem [ref=e295]:
              - generic [ref=e296]:
                - 'checkbox "Select TOKEN2049 Abu Dhabi: TOKEN2049 Abu Dhabi - founder pass ready" [ref=e297]'
                - button "TOKEN2049 Abu Dhabi TOKEN2049 Abu Dhabi Verified 9:18 AM TOKEN2049 Abu Dhabi - founder pass ready" [ref=e298]:
                  - img "TOKEN2049 Abu Dhabi" [ref=e300]
                  - generic [ref=e302]:
                    - generic [ref=e303]:
                      - generic [ref=e304]:
                        - generic [ref=e305]: TOKEN2049 Abu Dhabi
                        - generic [ref=e307]:
                          - img [ref=e308]
                          - generic [ref=e311]: Verified
                      - generic [ref=e312]: 9:18 AM
                    - generic [ref=e313]: TOKEN2049 Abu Dhabi - founder pass ready
            - listitem [ref=e314]:
              - generic [ref=e315]:
                - 'checkbox "Select Relay Node 07: Your relay verification code" [ref=e316]'
                - button "Relay Node 07 Relay Node 07 Unknown 8:57 AM Your relay verification code" [ref=e317]:
                  - img "Relay Node 07" [ref=e319]
                  - generic [ref=e321]:
                    - generic [ref=e322]:
                      - generic [ref=e323]:
                        - generic [ref=e324]: Relay Node 07
                        - generic [ref=e326]:
                          - img [ref=e327]
                          - generic [ref=e330]: Unknown
                      - generic [ref=e331]: 8:57 AM
                    - generic [ref=e332]: Your relay verification code
            - listitem [ref=e333]:
              - generic [ref=e334]:
                - 'checkbox "Select Uthaimin Lawal: Investor update and postage policy" [ref=e335]'
                - button "Uthaimin Lawal Uthaimin Lawal Unknown 8:23 AM Investor update and postage policy" [ref=e336]:
                  - img "Uthaimin Lawal" [ref=e338]
                  - generic [ref=e339]:
                    - generic [ref=e340]:
                      - generic [ref=e341]:
                        - generic [ref=e342]: Uthaimin Lawal
                        - generic [ref=e344]:
                          - img [ref=e345]
                          - generic [ref=e348]: Unknown
                      - generic [ref=e349]: 8:23 AM
                    - generic [ref=e350]: Investor update and postage policy
            - listitem [ref=e351]:
              - generic [ref=e352]:
                - 'checkbox "Select Unknown Sender: Message request awaiting approval" [ref=e353]'
                - button "Unknown Sender Unknown Sender Paid 7:48 AM Message request awaiting approval" [ref=e354]:
                  - img "Unknown Sender" [ref=e356]
                  - generic [ref=e358]:
                    - generic [ref=e359]:
                      - generic [ref=e360]:
                        - generic [ref=e361]: Unknown Sender
                        - generic [ref=e363]:
                          - img [ref=e364]
                          - generic [ref=e367]: Paid
                      - generic [ref=e368]: 7:48 AM
                    - generic [ref=e369]: Message request awaiting approval
              - button "Review sender" [ref=e371]:
                - img [ref=e372]
                - generic [ref=e375]: Review sender
            - listitem [ref=e376]:
              - generic [ref=e377]:
                - 'checkbox "Select Stellar Fund: Grant application review" [ref=e378]'
                - button "Stellar Fund Stellar Fund Verified Yesterday Grant application review" [ref=e379]:
                  - img "Stellar Fund" [ref=e381]
                  - generic [ref=e383]:
                    - generic [ref=e384]:
                      - generic [ref=e385]:
                        - generic [ref=e386]: Stellar Fund
                        - generic [ref=e388]:
                          - img [ref=e389]
                          - generic [ref=e392]: Verified
                      - generic [ref=e393]: Yesterday
                    - generic [ref=e394]: Grant application review
              - button "Review sender" [ref=e396]:
                - img [ref=e397]
                - generic [ref=e400]: Review sender
            - listitem [ref=e401]:
              - generic [ref=e402]:
                - 'checkbox "Select Anonymous Trader: OTC offer for STEALTH tokens" [ref=e403]'
                - button "Anonymous Trader Anonymous Trader Paid Yesterday OTC offer for STEALTH tokens" [ref=e404]:
                  - img "Anonymous Trader" [ref=e406]
                  - generic [ref=e408]:
                    - generic [ref=e409]:
                      - generic [ref=e410]:
                        - generic [ref=e411]: Anonymous Trader
                        - generic [ref=e413]:
                          - img [ref=e414]
                          - generic [ref=e417]: Paid
                      - generic [ref=e418]: Yesterday
                    - generic [ref=e419]: OTC offer for STEALTH tokens
              - button "Review sender" [ref=e421]:
                - img [ref=e422]
                - generic [ref=e425]: Review sender
            - listitem [ref=e426]:
              - generic [ref=e427]:
                - 'checkbox "Select Nadia Reyes: Encrypted payload test" [ref=e428]'
                - button "Nadia Reyes Nadia Reyes Verified Yesterday Encrypted payload test" [ref=e429]:
                  - img "Nadia Reyes" [ref=e431]
                  - generic [ref=e432]:
                    - generic [ref=e433]:
                      - generic [ref=e434]:
                        - generic [ref=e435]: Nadia Reyes
                        - generic [ref=e437]:
                          - img [ref=e438]
                          - generic [ref=e441]: Verified
                      - generic [ref=e442]: Yesterday
                    - generic [ref=e443]: Encrypted payload test
            - listitem [ref=e444]:
              - generic [ref=e445]:
                - 'checkbox "Select Stealth Security: Your sign-in passkey" [ref=e446]'
                - button "Stealth Security Stealth Security Unknown Just now Your sign-in passkey" [ref=e447]:
                  - img "Stealth Security" [ref=e449]
                  - generic [ref=e451]:
                    - generic [ref=e452]:
                      - generic [ref=e453]:
                        - generic [ref=e454]: Stealth Security
                        - generic [ref=e456]:
                          - img [ref=e457]
                          - generic [ref=e460]: Unknown
                      - generic [ref=e461]: Just now
                    - generic [ref=e462]: Your sign-in passkey
        - separator [ref=e463]:
          - img [ref=e465]
        - generic [ref=e475]:
          - generic [ref=e476]:
            - generic [ref=e478]:
              - generic [ref=e479]: LP
              - generic [ref=e480]:
                - generic [ref=e481]:
                  - generic [ref=e482]: Lina Park
                  - generic [ref=e484]:
                    - img [ref=e485]
                    - text: Verified
                - generic [ref=e488]: lina*vantage.studio
            - generic [ref=e489]:
              - button "Reply" [ref=e491]:
                - img [ref=e492]
                - generic [ref=e495]: Reply
              - button [ref=e496]:
                - img [ref=e497]
              - button [ref=e501]:
                - img [ref=e502]
            - generic [ref=e505]:
              - button "Z" [ref=e506]:
                - img [ref=e507]
                - generic [ref=e510]: Z
              - button "E" [ref=e511]:
                - img [ref=e512]
                - generic [ref=e515]: E
              - button "Move to trash" [ref=e516]:
                - img [ref=e517]
              - button "Unstar" [ref=e520]:
                - img [ref=e521]
          - article [ref=e524]:
            - generic [ref=e526]:
              - paragraph [ref=e527]: Conversation
              - heading "Q2 brand system - final direction" [level=1] [ref=e528]
              - generic [ref=e529]:
                - generic [ref=e530]: Design
                - generic [ref=e531]: Priority
            - generic [ref=e532]:
              - img [ref=e533]
              - generic [ref=e536]: Stellar identity verified
              - generic [ref=e537]: 01c7...9a9
              - generic [ref=e538]:
                - button "Inspect provenance" [ref=e539]
                - button "Copy proof" [ref=e540]
            - generic [ref=e541]:
              - img [ref=e542]
              - generic [ref=e545]: Read receipt sent
            - generic [ref=e546]:
              - paragraph [ref=e547]: Hey,
              - paragraph [ref=e548]: Sharing the refined exploration for the new identity. The monochrome system feels strongest across product surfaces. I've attached the latest spec sheet and the motion principles deck.
              - paragraph [ref=e549]: Let me know your thoughts before Friday's review.
              - paragraph [ref=e550]: Lina
            - generic [ref=e551]:
              - generic [ref=e552]:
                - img [ref=e553]
                - text: 4 attachments
              - generic [ref=e555]:
                - generic [ref=e556] [cursor=pointer]:
                  - img [ref=e558]
                  - generic [ref=e561]:
                    - generic [ref=e562]: vantage-identity-v3.pdf
                    - generic [ref=e563]: 4.2 MB
                - generic [ref=e564] [cursor=pointer]:
                  - img [ref=e566]
                  - generic [ref=e570]:
                    - generic [ref=e571]: brand-moodboard.png
                    - generic [ref=e572]: 1.8 MB
                - generic [ref=e573] [cursor=pointer]:
                  - img [ref=e575]
                  - generic [ref=e578]:
                    - generic [ref=e579]: release-notes.txt
                    - generic [ref=e580]: 1.2 KB
                - generic [ref=e581] [cursor=pointer]:
                  - img [ref=e583]
                  - generic [ref=e586]:
                    - generic [ref=e587]: motion-principles.key
                    - generic [ref=e588]: 12.1 MB
        - separator [ref=e590]:
          - img [ref=e592]
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures";
  2  | 
  3  | test.describe("compose flow", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // Skip onboarding by pre-setting localStorage
  6  |     await page.addInitScript(() => {
  7  |       localStorage.setItem("stealth-preferences", JSON.stringify({ onboardingCompleted: true }));
  8  |     });
  9  |     await page.goto("/");
  10 |   });
  11 | 
  12 |   test("opens compose, fills fields, and sends message", async ({ page }) => {
  13 |     // Open compose via keyboard shortcut
  14 |     await page.keyboard.press("Control+n");
  15 | 
  16 |     // Compose dialog becomes visible
  17 |     await expect(page.getByText("New message")).toBeVisible();
  18 | 
  19 |     // Fill recipient, subject, and body
  20 |     await page.getByPlaceholder(/recipients@/).fill("alice*stellar.org");
  21 |     await page.getByPlaceholder("Subject").fill("E2E test subject");
  22 |     await page.getByPlaceholder(/Write your message/).fill("Hello from E2E test");
  23 | 
  24 |     // Send
  25 |     await page.getByRole("button", { name: "Send" }).click();
  26 | 
  27 |     // Dialog closes and toast confirms delivery
  28 |     await expect(page.getByText("New message")).not.toBeVisible();
  29 |     await expect(page.getByText(/Encrypted message sent/i)).toBeVisible();
  30 |   });
  31 | 
  32 |   test("validates required fields before sending", async ({ page }) => {
  33 |     await page.keyboard.press("Control+n");
  34 |     await expect(page.getByText("New message")).toBeVisible();
  35 | 
  36 |     // Attempt to send with empty recipient
  37 |     await page.getByRole("button", { name: "Send" }).click();
  38 | 
  39 |     // Dialog stays open; error toast shown
  40 |     await expect(page.getByText("New message")).toBeVisible();
  41 |     await expect(page.getByText(/Please enter a recipient/i)).toBeVisible();
  42 |   });
  43 | 
  44 |   test("schedules message instead of immediate send", async ({ page }) => {
  45 |     await page.keyboard.press("Control+n");
  46 | 
> 47 |     await page.getByPlaceholder(/recipients@/).fill("bob*stellar.org");
     |                                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  48 |     await page.getByPlaceholder("Subject").fill("Scheduled message");
  49 |     await page.getByPlaceholder(/Write your message/).fill("Sent later");
  50 | 
  51 |     await page.getByRole("button", { name: "Schedule" }).click();
  52 | 
  53 |     await expect(page.getByText("New message")).not.toBeVisible();
  54 |     await expect(page.getByText(/scheduled/i)).toBeVisible();
  55 |   });
  56 | });
  57 | 
```