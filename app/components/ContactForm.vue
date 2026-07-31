<script setup lang="ts">
// Form Structure Schema Interface
interface ContactFormPayload {
  fullName: string
  email: string
  message: string
}

// Errors tracking dictionary structure
interface FormErrors {
  fullName?: string
  email?: string
  message?: string
}

const formData = ref<ContactFormPayload>({
  fullName: '',
  email: '',
  message: ''
})

const errors = ref<FormErrors>({})
const isSubmitting = ref<boolean>(false)
const submitSuccess = ref<boolean>(false)

// Native Validation Engine using strict Regex rules
const validateForm = (): boolean => {
  const currentErrors: FormErrors = {}
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!formData.value.fullName.trim()) {
    currentErrors.fullName = 'Full corporate name is required.'
  }
  if (!formData.value.email.trim()) {
    currentErrors.email = 'Email address cannot be blank.'
  } else if (!emailRegex.test(formData.value.email)) {
    currentErrors.email = 'Please provide a valid corporate email handle.'
  }
  if (formData.value.message.trim().length < 10) {
    currentErrors.message = 'Message payload must span at least 10 characters.'
  }

  errors.value = currentErrors
  return Object.keys(currentErrors).length === 0
}

const handleFormSubmit = async (): Promise<void> => {
  submitSuccess.value = false
  if (!validateForm()) return

  isSubmitting.value = true
  
  try {
    // Simulate API delay process
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    submitSuccess.value = true
    formData.value = { fullName: '', email: '', message: '' } // Reset state safely
  } catch (err) {
    console.error('Submission pipeline fault:', err)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contact-section" class="py-16 bg-transparent border-t border-slate-700">
    <div class="max-w-md mx-auto px-4">
      <div class="text-center mb-8">
        <span class="text-md font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Connect With Us</span>
        <p class="text-md text-slate-300 mt-1">Our clean architecture team responds within 24 standard working hours</p>
      </div>

      <form @submit.prevent="handleFormSubmit" class="space-y-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm" novalidate>
        
        <!-- Name Field -->
        <div>
          <label class="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">Name</label>
          <input 
            v-model="formData.fullName" 
            type="text" 
            class="w-full px-4 py-2.5 bg-white border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20"
            :class="errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#556B2F]'"
            placeholder="JohnMary Deo"
          />
          <p v-if="errors.fullName" class="text-xs text-red-500 mt-1 font-medium">{{ errors.fullName }}</p>
        </div>

        <!-- Email Field -->
        <div>
          <label class="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">Email Address</label>
          <input 
            v-model="formData.email" 
            type="email" 
            class="w-full px-4 py-2.5 bg-white border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20"
            :class="errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#556B2F]'"
            placeholder="john@company.com"
          />
          <p v-if="errors.email" class="text-xs text-red-500 mt-1 font-medium">{{ errors.email }}</p>
        </div>

        <!-- Message Field -->
        <div>
          <label class="block text-xs font-bold uppercase text-slate-700 tracking-wider mb-1.5">Major Requirements</label>
          <textarea 
            v-model="formData.message" 
            rows="4" 
            class="w-full px-4 py-2.5 bg-white border rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20 resize-none"
            :class="errors.message ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-[#556B2F]'"
            placeholder="Outline your application needs here..."
          ></textarea>
          <p v-if="errors.message" class="text-xs text-red-500 mt-1 font-medium">{{ errors.message }}</p>
        </div>

        <!-- Trigger Button -->
        <button 
          type="submit" 
          :disabled="isSubmitting"
          class="w-full bg-gradient-to-r from-[#556B2F] to-emerald-600 hover:from-[#4A5320] hover:to-emerald-700 disabled:from-slate-400 disabled:to-slate-400 text-white font-semibold py-3 px-4 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
        >
          <svg v-if="isSubmitting" class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          {{ isSubmitting ? 'Transmitting Data...' : 'Dispatch Message' }}
        </button>

        <!-- Success Toast Indicator -->
        <div v-if="submitSuccess" class="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold text-center animate-fade-in">
          Message sent successfully! Our team will contact you shortly.
        </div>
      </form>
    </div>
  </section>
</template>
