<script setup lang="ts">
useHead({
  title: 'Reflection - Research Methods and Professional Practice - E-Portfolio',
})

definePageMeta({
  layout: 'research-methods',
  page: 'research-methods',
  pageType: 'Research Methods and Professional Practice - E-Portfolio',
})

const content = `
Using the reflective structure of What? / So What? / Now What? (Rolfe, Freshwater & Jasper, 2001), This piece examines my journey through the Research Methods and Professional Practice module. It focuses on three key areas: the development of my statistical analysis skills, the research methods process, and the personal/professional impact of working through my Skills Matrix and Action Plan.

### WHAT? My Learning Experience
At the outset of this module, I regarded research methods as a linear sequence of tasks: select a topic, gather data, analyse, and report. However, through study and practice, I came to see research as an iterative, reflective endeavour that requires critical alignment between purpose, methodology, and ethical positioning (Saunders, Lewis & Thornhill, 2019). The module's emphasis on research philosophy opened my eyes to how the choice between quantitative, qualitative or mixed-methods is not purely methodological but fundamentally linked to beliefs about knowledge (Creswell & Creswell, 2018).

I started the module thinking that statistical work meant plugging numbers into formulas or clicking through menus. Over time, though, I found myself asking not just 'what does the output show?' but 'what does this mean in real terms?' I revisited the basics: sampling, hypothesis tests, and correlations, yet the real change was shifting from analysing to understanding it. In this way, I moved beyond number crunching into genuine statistical literacy (Masfingatin & Suprapto, 2020).

Moreover, the module underlined that data analysis is not value-free. Issues of validity, reliability, bias and data ethics were woven into each step. Reviewing case studies of poor data governance or unethical data handling reinforced that analytical rigour must be paired with ethical responsibility and transparency (Resnik, 2020). In hands-on exercises using Excel, I started documenting decision-making, assessing assumptions, cross-checking outputs, and justifying method choices, rather than simply presenting results.

### SO WHAT? Interpretation and Professional Impact
The significance of these learning developments is twofold: academically and professionally. Academically, I now appreciate that research design, data collection and analysis form an integrated whole: misaligned components weaken credibility. For example, a poorly framed question cannot be redeemed by elegant statistical modelling; conversely, data analysis without a clear research justification risks producing meaningless numbers. Recognising this reinforces the importance of coherence and justification in every research stage (Creswell & Plano Clark, 2018).

Professionally, the enhanced statistical literacy and methodological awareness position me to contribute with more confidence in data-driven contexts. In modern organisations where 'big data' and analytics are increasingly central, the ability to understand not just the outputs but the processes behind them is a key differentiator. The module's stress on communication of results to non-specialists also sharpened my awareness of responsible reporting: clearly stating limitations, making assumptions transparent, and avoiding misleading claims.

Reflecting on my Professional Skills Matrix and Action Plan, I can trace tangible progress:
- Research Design & Planning: I can now articulate a research question with justification, align appropriate methodology, and embed ethical considerations from the start.
- Academic Writing & Critical Thinking: My writing shifted from descriptive summaries to critical, evidence-based argumentation. I learned to engage with literature to support claims rather than merely reporting findings.
- Ethical and Responsible Practice: I moved from a reactive stance on ethics ("we'll get approval when needed") to a proactive one, integrating data governance, consent, transparency and reflexivity into each stage.

Importantly, the benefits go beyond the classroom. This module made reflection part of my routine, not just something I did at submission time. As Mohamed & Ab Rashid (2022) argue, true reflective practice blends problem-solving, action and critical thinking. I lived that cycle: I checked my analyses, found weak spots, tweaked my methods, and wrote down what I changed. That way, I'm building a habit, not just finishing a task.

In terms of statistical practice, understanding the difference between statistical literacy and mere computation matters: professionals must interpret, critique and communicate data rather than treat analysis as a black box. My improved ability to ask "What does this result mean in this organisational context?" rather than "What is the p-value?" marks a real step forward.

### NOW WHAT? Future Application and Development
What comes next? I'll carry this forward into my dissertation and beyond. I'm planning to use a mixed-methods design, blending numbers with stories, so I get both depth and breadth (Creswell & Plano Clark, 2018). And I'm committing: every choice I make, from formulating the question to picking the method and doing the analysis, will come with a why and a how. Transparency and justification won't be extras anymore; they'll be fundamentals.

Practically, I will deepen my technical capabilities in statistical tools and coding environments: I plan to use R (with packages such as statsmodels and tidyverse) and Python (scikit-learn, statsmodels) for reproducible, transparent analysis. I will adopt version-controlled notebooks, clear annotation, and peer-review style documentation. Over time, I aim to publish or present findings in formats accessible to non-technical stakeholders, aligning with the principle of communicating statistical insight responsibly.

Moreover, I will maintain and enhance my reflective practice. I will schedule structured reflection sessions using the Rolfe et al. (2001) model after each module, internship or research task: documenting what occurred, analysing why it matters, and planning how to apply the learning. Reflection will be embedded as a continuous professional habit rather than a discrete assignment. Research indicates that such structured reflection supports metacognitive growth, professional identity formation and deeper learning (Lane and Roberts, 2022).

In organisational settings, I will promote ethical data culture: advocating for clear documentation of methods, transparent reporting of limitations, and accessible presentation of findings. I will contribute to project teams not just as an analyst but as a critical data-advisor, someone who questions assumptions, highlights bias risks, and ensures alignment of analysis with organisational goals.

Finally, I will update my Skills Matrix and Action Plan at the end of this dissertation module and again annually in my professional career. My target is to reflect on emerging technologies (e.g., generative AI for analytics), ethical implications (e.g., algorithmic bias, data privacy) and evolving statistical literacy demands. For instance, adopting new frameworks for interpretable AI or engaging in responsible research innovation workshops will keep my professional growth aligned with contemporary demands (Sherwood, 2024).

### Conclusion
The Research Methods and Professional Practice module has been more than an academic requirement; it has reshaped my research mindset, refined my statistical and analytical proficiency, and strengthened my professional self-understanding. My journey moved from viewing research as a sequence of tasks to seeing it as an integrated, ethically grounded, reflective discipline. My statistical skills now include interpretation and critical judgement; my methodology awareness now prioritises coherence and justification; and my professionalism now embraces ongoing reflection and responsible practice.

By aligning technical competence with ethical awareness and a reflective mindset, I am better prepared for the challenges of academic research and professional data analytics. This module has marked a transition from competence to consciousness, from executing analysis to understanding its context, implications and responsibilities. It is the foundation upon which I will build a career characterised by rigorous, ethical and communicative research and analytics practice.
`
</script>

<template>
  <div>
    <section>
      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white z-10 pt-10">
        <AppIconSvg name="mdi:bookmark" class="size-6 text-green-500" />
        <h3 class="text-3xl font-semibold text-green-500">
          Reflection
        </h3>
      </div>

      <ContentPreview :content="content" />
    </section>

    <section class="mt-10">
      <NuxtLink to="/research-methods/references" class="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-4 hover:border-green-500 hover:text-green-500 border border-gray-300 border-dashed text-gray-700">
        <AppIconSvg name="ph:bookmark" class="size-6 text-green-500" />
        <span>Next: <span class="font-semibold">References</span></span>
      </NuxtLink>
    </section>
  </div>
</template>
