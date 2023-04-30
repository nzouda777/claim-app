<template>
    <div class="space-y-12 md:px-8 px-4 md:mt-20 relative before:content[''] before:absolute before:h-full before:bg-no-repeat before:w-full before:bg-favicon before:bg-contain before:bg-top  before:z-[-1] before:opacity-30">
        <div class="border-b-4 pb-5 border-primary-300 border-dotted">
            <div class="md:w-4/5">
                <h2 class="font-bold capitalize text-secondary-500 text-2xl">
                    our promise
                </h2>
                <p class="py-6 text-lg">
                    You will always be eligible to receive a full refund of your purchase, provided that your payment scenario is covered by our Payment Protection Promise.
                </p>
            </div>
        </div>
        <div class="md:w-4/5">
                <h2 class="font-bold capitalize text-secondary-500 text-2xl">
                    You're protected if:
                </h2>
                <ul class="text-lg space-y-4 py-8">
                    <li class="flex space-between items-center gap-x-2">
                        <i class="rounded-full bg-primary-300 px-2 py-2 inline-block text-secondary-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </i>
                        <span>
                            You were charged for something you didn't purchase.
                        </span>
                    </li>
                    <li class="flex space-between items-center gap-x-2">
                        <i class="rounded-full bg-primary-300 px-2 py-2 inline-block text-secondary-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </i>
                        <span>
                            You were charged for something you didn't purchase.
                        </span>
                    </li>
                    <li class="flex space-between items-center gap-x-2">
                        <i class="rounded-full bg-primary-300 px-2 py-2 inline-block text-secondary-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </i>
                        <span>
                            You were charged for something you didn't purchase.
                        </span>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script >

export default {
  name: 'Item-Left',
  props: {
    msg: String
  }
}
</script>