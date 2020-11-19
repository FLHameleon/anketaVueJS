<template>
    <div>
        <label>{{ namePole }}:</label>
            <label>Мужской:<input name="polUser" type="radio" value="Men" checked/></label>
            <label>Женский:<input name="polUser" type="radio" value="Women"/></label>
    </div>
</template>

<script>
export default {
  props: [
    'namePole'
  ] 
}
</script>
