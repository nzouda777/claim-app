<template>
    <div class="space-y-6 md:px-8 px-4 mt-8 md:mt-20">
      <h2 class="text-2xl capitalize font-semibold">
        reclamation
      </h2>
        <form action="" >
          <h5 class="text-lg">Mode de Reclamation</h5>
            <div class="flex space-between gap-6 items-center mt-5">
              <div class="flex">
                <input type="checkbox" @click="refMode" v-model="byRef"  name="modeRef" id="" >
                <span class="ml-2">Reference de la Transation</span>
              </div>
              <div class="flex">
                <input type="checkbox" @click="numMode" v-model="byNum" name="modeNum" id="">
                <span class="ml-2">Moyen de Paiment</span>
              </div>
            </div>
            <div class="mt-8 space-y-4" v-if='isRef'>
              <div class="space-y-2">  
                <label for="">Reference de la Transation</label>
                <input type="text" class="w-full rounded-lg py-2 px-3 border-2 outline-none">
              </div>
              <div class="space-y-2">  
                <label for="">Motif de la Reclamation</label>
                <textarea name="" id="" cols="30" rows="10" class="border-2 outline-none rounded-lg h-32 w-full"></textarea>
              </div>
              <button class="bg-secondary-500 text-white w-full py-4 rounded-xl text-xl shadow-xl">Reclamer</button>
            </div>

            <!-- by number -->
            
            <div class="mt-8 space-y-4" v-if='isNum'>
              <div class="space-y-2">  
                <label for="">Numero de la Telephone</label>
                <input type="text" class="w-full rounded-lg py-2 px-3 border-2 outline-none">
              </div>
              <div class="space-y-2">  
                <label for="">Motif de la Reclamation</label>
                <textarea name="" id="" cols="30" rows="10" class="border-2 outline-none rounded-lg h-32 w-full"></textarea>
              </div>
              <button class="bg-secondary-500 text-white w-full py-4 rounded-xl text-xl shadow-xl">Reclamer</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'Item-Right',
  props: {
    msg: String
  },
  data: function (){
    return {
      isRef: true,
      byRef: true,
      isNum: false,
      byNum: false
    }
  },
  methods:{
    refMode(){
      this.isRef = true
      this.byRef = true
      this.isNum = false
      this.byNum = false
    },
    numMode(){
      this.isRef = false
      this.byRef = false
      this.isNum = true
      this.byNum = true
    }
  }
}
</script>